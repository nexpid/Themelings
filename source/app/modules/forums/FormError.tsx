// app/modules/forums/FormError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function formSubmitError(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = {};
            var2 = arg1;
            var1['type'] = var2;
            var2 = null;
            var4 = var2 != var3;
            if(!var4) { _fun0001_ip = 24; continue _fun0001 }
 21:
            var2 = var3;
 24:
            var1['message'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function makeEmptyContentError(arg1) {
        var4 = _closure1_slot3;
        var1 = _closure1_slot2;
        var3 = var1.EmptyContent;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var7 = 0;
    var4['EmptyContent'] = var7;
    var1 = 'EmptyContent';
    var4[var7] = var1;
    var7 = 1;
    var4['AutomodViolation'] = var7;
    var1 = 'AutomodViolation';
    var4[var7] = var1;
    var1 = 2;
    var4['EmptyTags'] = var1;
    var7 = 'EmptyTags';
    var4[var1] = var7;
    var _closure1_slot2 = var4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/FormError.tsx';
    var5 = var6.bind(var7)(var5);
    var3['FormSubmitErrorType'] = var4;
    var4 = function makeEmptyTitleError() {
        var3 = _closure1_slot4;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 0;
        var4 = var7[var1];
        var2 = undefined;
        var4 = var6.bind(var2)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1.71wuR0;
        var1 = var4.bind(var5)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['makeEmptyTitleError'] = var4;
    var4 = function makeEmptyMessageError() {
        var3 = _closure1_slot4;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 0;
        var4 = var7[var1];
        var2 = undefined;
        var4 = var6.bind(var2)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1.w/BT3N;
        var1 = var4.bind(var5)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['makeEmptyMessageError'] = var4;
    var4 = function makeAutomodViolationError(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg2;
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var3 = var3.AutomodViolation;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var5 = var5[var2];
            var2 = undefined;
            var7 = var6.bind(var2)(var5);
            var6 = var7.getAutomodErrorMessageFromErrorResponse;
            var5 = null;
            var8 = var5 == var1;
            var5 = undefined;
            if(var8) { _fun0002_ip = 64; continue _fun0002 }
 59:
            var5 = var1.id;
 64:
            var1 = arg1;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        }
    };
    var3['makeAutomodViolationError'] = var4;
    var4 = function makeEmptyTagsError() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot2;
        var3 = var2.EmptyTags;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 0;
        var5 = var8[var1];
        var2 = undefined;
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var1 = var8[var1];
        var1 = var7.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1.xPfNQk;
        var1 = var5.bind(var6)(var1);
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['makeEmptyTagsError'] = var4;
    var2 = function renderError(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var2 = null;
            var5 = var2 == var3;
            var1 = null;
            if(var5) { _fun0003_ip = 153; continue _fun0003 }
 20:
            var7 = var3.type;
            var6 = _closure1_slot2;
            var6 = var6.EmptyContent;
            if(!(var7 === var6)) { _fun0003_ip = 82; continue _fun0003 }
 42:
            var6 = var4.content;
            if(!(var2 != var6)) { _fun0003_ip = 82; continue _fun0003 }
 51:
            var7 = var4.content;
            var6 = var7.trim;
            var6 = var6.bind(var7)();
            var7 = var6.length;
            var6 = 0;
            var6 = var7 > var6;
            var1 = null;
            if(var6) { _fun0003_ip = 153; continue _fun0003 }
 82:
            var6 = var3.type;
            var5 = _closure1_slot2;
            var5 = var5.EmptyTags;
            if(!(var6 === var5)) { _fun0003_ip = 133; continue _fun0003 }
 101:
            var5 = var4.tags;
            if(!(var2 != var5)) { _fun0003_ip = 133; continue _fun0003 }
 111:
            var4 = var4.tags;
            var5 = var4.length;
            var4 = 0;
            var4 = var5 > var4;
            var1 = null;
            if(var4) { _fun0003_ip = 153; continue _fun0003 }
 133:
            var3 = var3.message;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0003_ip = 150; continue _fun0003 }
 147:
            var2 = var3;
 150:
            var1 = var2;
 153:
            return var1;
        }
    };
    var3['renderError'] = var2;
    return var1;
})();