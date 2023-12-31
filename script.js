// JavaScript source code
$(function () {
    $(document).on('keydown', 'input[type="number"]', function (e) {
        let allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Decimal', '-', 'Subtract', 'Backspace', 'ArrowLeft', 'Left', 'ArrowRight', 'Right', 'Delete', 'Del', 'Tab', 'Enter'];

        // 檢查按下的按鍵是否在允許的列表中，如果不在列表中且不是功能鍵，則阻止輸入
        if (allowedKeys.indexOf(e.key) === -1 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
            e.preventDefault();
        }
    });

    $(document).on('paste', 'input[type="number"]', function (e) {
        let $this = $(this);
        setTimeout(function () {
            // 取得輸入框中的值
            let inputValue = $this.val();
            // 移除不是0-9和.以及-以外的字符，但保留原始值中的數字、小數點和負號
            const sanitizedValue = inputValue.replace(/[^0-9.\-]/g, '');
            // 更新輸入框的值
            $this.val(sanitizedValue);
        }, 0);
    });
});