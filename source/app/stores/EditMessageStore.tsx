// app/stores/EditMessageStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function EditMessageStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isEditing';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0003_ip = 30; continue _fun0003 }
 25:
                var2 = var1.messageId;
 30:
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isEditingAny';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getEditingTextValue';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 31; continue _fun0004 }
 25:
                var1 = var2.textValue;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getEditingRichValue';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 31; continue _fun0005 }
 25:
                var1 = var2.richValue;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getEditingMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0006_ip = 30; continue _fun0006 }
 25:
                var1 = var2.messageId;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getEditingMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var1 = _closure1_slot9;
                var2 = var1[var5];
                var6 = null;
                var4 = var6 != var2;
                var1 = null;
                if(!var4) { _fun0007_ip = 60; continue _fun0007 }
 25:
                var4 = var2.messageId;
                var4 = var6 != var4;
                var1 = null;
                if(!var4) { _fun0007_ip = 60; continue _fun0007 }
 39:
                var4 = _closure1_slot8;
                var3 = var4.getMessage;
                var2 = var2.messageId;
                var1 = var3.bind(var4)(var5, var2);
 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getEditActionSource';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'EditMessageStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleMessageStartEdit(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var8 = var1.messageId;
            var7 = var1.content;
            var3 = var1.source;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 6;
            var5 = var12[var1];
            var1 = undefined;
            var5 = var9.bind(var1)(var5);
            var6 = var5.UseLegacyChatInput;
            var5 = var6.getSetting;
            var11 = var5.bind(var6)();
            var6 = _closure1_slot1;
            var5 = 7;
            var5 = var12[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.unparse;
            var10 = var5.bind(var6)(var7, var4);
            var6 = _closure1_slot9;
            var5 = {};
            var5['channelId'] = var4;
            var5['messageId'] = var8;
            var5['textValue'] = var10;
            var8 = 8;
            var8 = var12[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.toRichValue;
            if(!var11) { _fun0008_ip = 135; continue _fun0008 }
 132:
            var7 = var10;
 135:
            var7 = var8.bind(var9)(var7);
            var5['richValue'] = var7;
            var6[var4] = var5;
            var2 = _closure1_slot10;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['MESSAGE_START_EDIT'] = var9;
    var9 = function handleMessageUpdateEdit(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.textValue;
            var5 = var1.richValue;
            var2 = _closure1_slot9;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0009_ip = 79; continue _fun0009 }
 37:
            var2 = _closure1_slot9;
            var1 = {};
            var8 = var1;
            var7 = var4;
            var4 = copyDataProperties(var8, var7);
            var4 = 'textValue';
            var1[var4] = var6;
            var4 = 'richValue';
            var1[var4] = var5;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
 79:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE_EDIT'] = var9;
    var9 = function handleMessageEndEdit(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var4 = null;
            if(!(var4 != var2)) { _fun0010_ip = 49; continue _fun0010 }
 14:
            var3 = _closure1_slot9;
            var3 = var3[var2];
            if(!(var4 != var3)) { _fun0010_ip = 49; continue _fun0010 }
 29:
            var3 = _closure1_slot9;
            var3 = delete var3[var2];
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 49:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_END_EDIT'] = var9;
    var4 = function handleMessageDelete(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var5 = var1.id;
            var1 = _closure1_slot9;
            var6 = var1[var3];
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0011_ip = 42; continue _fun0011 }
 37:
            var4 = var6.messageId;
 42:
            if(!(var4 === var5)) { _fun0011_ip = 62; continue _fun0011 }
 46:
            var4 = _closure1_slot9;
            var4 = delete var4[var3];
            var2 = _closure1_slot10;
            var2 = delete var2[var3];
 62:
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/EditMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();