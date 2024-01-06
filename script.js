// JavaScript source code
$(function () {
    $(document).on('keydown', 'input[type="number"]', function (e) {
        let allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Decimal', '-', 'Subtract', 'Backspace', 'ArrowLeft', 'Left', 'ArrowRight', 'Right', 'Delete', 'Del', 'Tab', 'Enter'];

        // �ˬd���U������O�_�b���\���C���A�p�G���b�C���B���O�\����A�h�����J
        if (allowedKeys.indexOf(e.key) === -1 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
            e.preventDefault();
        }
    });

    $(document).on('paste', 'input[type="number"]', function (e) {
        let $this = $(this);
        setTimeout(function () {
            // ���o��J�ؤ�����
            let inputValue = $this.val();
            // �������O0-9�M.�H��-�H�~���r�šA���O�d��l�Ȥ����Ʀr�B�p���I�M�t��
            const sanitizedValue = inputValue.replace(/[^0-9.\-]/g, '');
            // ��s��J�ت���
            $this.val(sanitizedValue);
        }, 0);
    });
});