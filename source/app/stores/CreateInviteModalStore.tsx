// app/stores/CreateInviteModalStore.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function updateWithLatestInvite(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var1 = arg2;
            var6 = var1.targetType;
            var5 = var1.targetUserId;
            var4 = var1.targetApplicationId;
            var2 = _closure1_slot8;
            var1 = var2.getChannel;
            var11 = var1.bind(var2)(var9);
            var10 = _closure1_slot9;
            var7 = var10.getGuild;
            var8 = null;
            var12 = var8 == var11;
            var1 = undefined;
            var2 = undefined;
            if(var12) { _fun0002_ip = 68; continue _fun0002 }
 63:
            var2 = var11.guild_id;
 68:
            var11 = var7.bind(var10)(var2);
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var10 = var7.bind(var1)(var2);
            var7 = var10.getDefaultInviteExpiration;
            var2 = {};
            var2['guild'] = var11;
            var7 = var7.bind(var10)(var2);
            if(!(var8 == var7)) { _fun0002_ip = 118; continue _fun0002 }
 114:
            var7 = _closure1_slot18;
 118:
            var11 = _closure1_slot10;
            var10 = var11.getInvite;
            var2 = {};
            var2['targetType'] = var6;
            var2['targetUserId'] = var5;
            var2['targetApplicationId'] = var4;
            var2 = var10.bind(var11)(var9, var2);
            var _closure1_slot14 = var2;
            var2 = {};
            var2['channelId'] = var9;
            var9 = _closure1_slot14;
            if(!(var8 != var9)) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var9 = _closure1_slot14;
            var7 = var9.maxAge;
 179:
            var2['maxAge'] = var7;
            var7 = _closure1_slot14;
            if(!(var8 == var7)) { _fun0002_ip = 198; continue _fun0002 }
 192:
            var7 = _closure1_slot19;
            _fun0002_ip = 208; continue _fun0002;
 198:
            var9 = _closure1_slot14;
            var7 = var9.maxUses;
 208:
            var2['maxUses'] = var7;
            var7 = _closure1_slot14;
            var7 = var8 != var7;
            if(!var7) { _fun0002_ip = 234; continue _fun0002 }
 224:
            var9 = _closure1_slot14;
            var7 = var9.temporary;
 234:
            var2['temporary'] = var7;
            var7 = _closure1_slot14;
            var8 = var8 != var7;
            var7 = 0;
            if(!var8) { _fun0002_ip = 261; continue _fun0002 }
 252:
            var8 = _closure1_slot14;
            var7 = var8.flags;
 261:
            var2['flags'] = var7;
            var2['targetType'] = var6;
            var2['targetUserId'] = var5;
            var2['targetApplicationId'] = var4;
            var _closure1_slot15 = var2;
            var _closure1_slot16 = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function init(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure1_slot12 = var1;
            var1 = null;
            var _closure1_slot13 = var1;
            var4 = var2.targetType;
            var5 = var1 != var4;
            var6 = null;
            if(!var5) { _fun0003_ip = 39; continue _fun0003 }
 36:
            var6 = var4;
 39:
            var4 = var2.targetUserId;
            var7 = var1 != var4;
            var5 = null;
            if(!var7) { _fun0003_ip = 57; continue _fun0003 }
 54:
            var5 = var4;
 57:
            var4 = var2.targetApplicationId;
            var7 = var1 != var4;
            var1 = null;
            if(!var7) { _fun0003_ip = 75; continue _fun0003 }
 72:
            var1 = var4;
 75:
            var4 = _closure1_slot23;
            var3 = var2.channelId;
            var2 = {};
            var2['targetType'] = var6;
            var2['targetUserId'] = var5;
            var2['targetApplicationId'] = var1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FormStates;
    var _closure1_slot11 = var2;
    var8 = 9;
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var9 = var9.INVITE_OPTIONS_7_DAYS;
    var9 = var9.value;
    var _closure1_slot18 = var9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.INVITE_OPTIONS_UNLIMITED;
    var8 = var8.value;
    var _closure1_slot19 = var8;
    var2 = var2.CLOSED;
    var _closure1_slot20 = var2;
    var2 = false;
    var _closure1_slot21 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CreateInviteModalStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
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
        var1 = 'init';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot10;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot20;
            var1 = _closure1_slot11;
            var1 = var1.CLOSED;
            var1 = var2 !== var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isSubmitting';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getInvite';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getInviteSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPendingSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'onClose';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CreateInviteModalStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleInit(arg1) {
        var3 = _closure1_slot24;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CREATE_INVITE_MODAL_INIT'] = var9;
    var9 = function handleModalOpen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot11;
            var1 = var1.OPEN;
            _closure1_slot20 = var1;
            var5 = var3.onClose;
            var1 = null;
            var6 = var1 != var5;
            var1 = undefined;
            var4 = undefined;
            if(!var6) { _fun0005_ip = 42; continue _fun0005 }
 39:
            var4 = var5;
 42:
            var _closure1_slot17 = var4;
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['CREATE_INVITE_MODAL_OPEN'] = var9;
    var9 = function handleUpdateSettings(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.settings;
            var4 = _closure1_slot16;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 49; continue _fun0006 }
 22:
            var1 = {};
            var5 = _closure1_slot16;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var6 = var1;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            _closure1_slot16 = var1;
 49:
            var1 = undefined;
            return var1;
        }
    };
    var2['CREATE_INVITE_MODAL_UPDATE_SETTINGS'] = var9;
    var9 = function handleResetSettings() {
        var1 = _closure1_slot15;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CREATE_INVITE_MODAL_RESET_SETTINGS'] = var9;
    var9 = function handleGenerateInvite() {
        var1 = _closure1_slot16;
        _closure1_slot15 = var1;
        var1 = true;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CREATE_INVITE_MODAL_GENERATE_INVITE'] = var9;
    var9 = function handleGenerateInviteSuccess(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var5 = null;
        _closure1_slot13 = var5;
        var1 = false;
        _closure1_slot21 = var1;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var3);
        var3 = _closure1_slot15;
        var5 = var5 != var3;
        var3 = 'No invite settings for generated invite';
        var3 = var6.bind(var1)(var5, var3);
        var5 = _closure1_slot15;
        var3 = _closure1_slot23;
        var2 = {};
        var6 = var5.targetType;
        var2['targetType'] = var6;
        var6 = var5.targetUserId;
        var2['targetUserId'] = var6;
        var5 = var5.targetApplicationId;
        var2['targetApplicationId'] = var5;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS'] = var9;
    var9 = function handleGenerateInviteFailure(arg1) {
        var1 = null;
        _closure1_slot14 = var1;
        var1 = false;
        _closure1_slot21 = var1;
        var1 = arg1;
        var1 = var1.message;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE'] = var9;
    var4 = function handleModalClose() {
        var1 = _closure1_slot11;
        var1 = var1.CLOSED;
        _closure1_slot20 = var1;
        var1 = undefined;
        _closure1_slot17 = var1;
        return var1;
    };
    var2['CREATE_INVITE_MODAL_CLOSE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/CreateInviteModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();