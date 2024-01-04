function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function showMessage(title, content) {
    $("#msgModalLabel").html(title);
    $("#msgContent").html(content);
    $("#msgModal").modal();
}

function isNullOrEmpty(value) {
    if (value == null || value == undefined || value == "" || value.lenght == 0) {

        return true;
    } else {
        return false;
    }
}

function showLoader() {
    $("#divLoader").removeClass("hidden");
}

function hideLoader() {
    $("#divLoader").addClass("hidden");
}

function showNewsLoader() {
    $("#newsloading").removeClass("hidden");
};

function hideNewsLoader() {
    $("#newsloading").addClass("hidden");
};

function showPopupPanel() {
    $("#popupPanel").removeClass("hidden fade");
    $("#opacity08").removeClass("hidden fade");
}

function hidePopupPanel() {
    $("#popupPanel").addClass("hidden fade");
    $("#opacity08").addClass("hidden fade");
}

function initCKEditor(id) {
    CKEDITOR.replace(id);
    CKEDITOR.config.height = 300;
    CKEDITOR.basePath = '/Scripts/ckeditor/';
    CKEDITOR.plugins.basePath = '/Scripts/ckeditor/plugins/';

}

function initCKEditorSimple(id) {
    CKEDITOR.replace(id);
    CKEDITOR.config.height = 300;
    CKEDITOR.basePath = '/Scripts/ckeditor/';
    CKEDITOR.plugins.basePath = '/Scripts/ckeditor/plugins/';

    CKEDITOR.config.toolbarGroups = [{
            name: 'document',
            groups: ['mode', 'document', 'doctools']
        },
        {
            name: 'clipboard',
            groups: ['clipboard', 'undo']
        },
        {
            name: 'editing',
            groups: ['find', 'selection', 'spellchecker', 'editing']
        },
        {
            name: 'forms',
            groups: ['forms']
        },
        '/',
        {
            name: 'paragraph',
            groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']
        },
        {
            name: 'basicstyles',
            groups: ['basicstyles', 'cleanup']
        },
        {
            name: 'links',
            groups: ['links']
        },
        {
            name: 'insert',
            groups: ['insert']
        },
        '/',
        {
            name: 'styles',
            groups: ['styles']
        },
        {
            name: 'colors',
            groups: ['colors']
        },
        {
            name: 'tools',
            groups: ['tools']
        },
        {
            name: 'others',
            groups: ['others']
        },
        {
            name: 'about',
            groups: ['about']
        }
    ];

    CKEDITOR.config.removeButtons = 'Source,Form,Radio,Checkbox,TextField,Textarea,Select,Button,ImageButton,HiddenField,Flash,Smiley,SpecialChar,PageBreak,Iframe,Save,NewPage,Preview,Print,Scayt,SelectAll,Find,Replace,Indent,Outdent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,CopyFormatting,RemoveFormat,Table,HorizontalRule,Anchor,About,Maximize,ShowBlocks,BGColor,TextColor,PasteFromWord,PasteText,Strike,Subscript,Superscript,Cut,Copy,Paste,Redo,Undo,Templates,Link,Unlink';

}

function getSelectValue(id) {
    return $(id).selectpicker('val');
}

function setSelectValue(id, value) {
    $(id).selectpicker('val', value);
}

function copyClipboard(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");
}