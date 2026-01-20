# Luhn 算法 (银行卡号校验) - JavaScript 实现

## 简介
Luhn 算法（也称为 "模 10 算法"）是一种简单的校验和公式，常用于验证各种身份识别码，如信用卡号、IMEI 号码等。它通过特定规则计算校验位，以防止意外的转录错误。

本文档包含该算法的 **JavaScript 实现**，包括两个核心功能：
1. **校验**：验证一个号码是否合规。
2. **生成**：根据自定义前缀生成合规的测试号码。

---

## 1. 核心代码 (JavaScript)

您可以将以下代码保存为 `luhn.js`。

```javascript
/**
 * Luhn 算法工具类
 */
const LuhnUtils = {
    /**
     * 校验号码是否符合 Luhn 规则
     * @param {string|number} number - 需要校验的号码
     * @returns {boolean}
     */
    isValid(number) {
        // 转换为数字数组
        let digits = String(number).split('').map(Number);
        
        // 从倒数第二位开始，每隔一位乘以 2
        for (let i = digits.length - 2; i >= 0; i -= 2) {
            digits[i] *= 2;
            
            // 如果乘积大于 9，则减去 9 (等同于个位+十位)
            if (digits[i] > 9) {
                digits[i] -= 9;
            }
        }
        
        // 计算总和
        const total = digits.reduce((acc, curr) => acc + curr, 0);
        
        // 若总和能被 10 整除，则有效
        return total % 10 === 0;
    },

    /**
     * 计算给定数字串的补位 (校验位)
     * @param {string} partialNumber - 不含校验位的数字串
     * @returns {number} 校验位 (0-9)
     */
    getCheckDigit(partialNumber) {
        // 假设校验位为 0 进行计算
        const digits = String(partialNumber + "0").split('').map(Number);
        
        let sum = 0;
        for (let i = digits.length - 2; i >= 0; i -= 2) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 9;
            }
        }
        
        sum = digits.reduce((acc, curr) => acc + curr, 0);
        
        // 计算补位：(10 - 余数) % 10
        const remainder = sum % 10;
        return remainder === 0 ? 0 : 10 - remainder;
    },

    /**
     * 生成合规号码
     * @param {string} prefix - 自定义前缀 (如 "622")
     * @param {number} length - 目标总长度 (如 16)
     * @returns {string} 完整的合规号码
     */
    generate(prefix, length) {
        const randomCount = length - String(prefix).length - 1;
        if (randomCount < 0) throw new Error("前缀过长或总长度过短");

        let middle = "";
        for (let i = 0; i < randomCount; i++) {
            middle += Math.floor(Math.random() * 10);
        }

        const partial = String(prefix) + middle;
        const checkDigit = this.getCheckDigit(partial);

        return partial + checkDigit;
    }
};

// 导出 (如果是 Node.js 环境)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LuhnUtils;
}
```

---

## 2.使用示例

校验号码

```javascript
// 测试案例 (来自 Python 版本示例)
const card1 = "6214663801888888";
const card2 = "6214663808888888";

console.log(`${card1} 有效性:`, LuhnUtils.isValid(card1)); // true
console.log(`${card2} 有效性:`, LuhnUtils.isValid(card2)); // false
```

生成测试数据

```javascript
// 生成一个以 622 开头的 16 位卡号
const newCard = LuhnUtils.generate("622", 16);
console.log("生成的合规卡号:", newCard);
console.log("验证生成结果:", LuhnUtils.isValid(newCard)); // true
```
