// app/modules/guild_member_verification/MemberVerificationFormStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {'version': '', 'description': ''};
    var4 = new Array(0);
    var2['formFields'] = var4;
    var _closure1_slot8 = var2;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function MemberVerificationFormStore() {
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
                var1 = _closure1_slot10;
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
        var1 = 'get';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 13; continue _fun0003 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot9;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRulesPrompt';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var6 = undefined;
                var4 = var3.bind(var6)(var2);
                var3 = var4.find;
                var5 = _closure1_slot9;
                var2 = arg1;
                var5 = var5[var2];
                var2 = null;
                var7 = var2 == var5;
                var2 = undefined;
                if(var7) { _fun0004_ip = 58; continue _fun0004 }
 52:
                var2 = var5.formFields;
 58:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.isTermsFormField;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'MemberVerificationFormStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleInviteData(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.invite;
            var6 = var1.member_verification_form;
            var5 = var1.guild;
            var7 = null;
            var1 = var7 != var5;
            if(!var1) { _fun0005_ip = 35; continue _fun0005 }
 31:
            var1 = var7 != var6;
 35:
            if(!var1) { _fun0005_ip = 107; continue _fun0005 }
 38:
            var4 = _closure1_slot9;
            var3 = var5.id;
            var2 = {};
            var8 = var6.version;
            var2['version'] = var8;
            var8 = var6.description;
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0005_ip = 82; continue _fun0005 }
 79:
            var7 = var8;
 82:
            var2['description'] = var7;
            var6 = var6.form_fields;
            var2['formFields'] = var6;
            var2['guild'] = var5;
            var4[var3] = var2;
            var1 = true;
 107:
            return var1;
        }
    };
    var4['INVITE_ACCEPT_SUCCESS'] = var10;
    var10 = function handleVerificationFormUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.form;
            var3 = var1.guildId;
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 71; continue _fun0006 }
 20:
            var5 = _closure1_slot9;
            var5 = var5[var3];
            if(!(var2 == var5)) { _fun0006_ip = 39; continue _fun0006 }
 35:
            var5 = _closure1_slot8;
 39:
            var2 = _closure1_slot9;
            var1 = {};
            var7 = var1;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var7 = var1;
            var6 = var4;
            var4 = copyDataProperties(var7, var6);
            var2[var3] = var1;
            _fun0006_ip = 86; continue _fun0006;
 71:
            var2 = _closure1_slot9;
            var1 = _closure1_slot8;
            var2[var3] = var1;
 86:
            var1 = undefined;
            return var1;
        }
    };
    var4['MEMBER_VERIFICATION_FORM_UPDATE'] = var10;
    var10 = function handleVerificationFormFetchFail(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = var2[var3];
            var5 = null;
            if(!(var5 == var1)) { _fun0007_ip = 29; continue _fun0007 }
 25:
            var1 = _closure1_slot8;
 29:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['MEMBER_VERIFICATION_FORM_FETCH_FAIL'] = var10;
    var5 = function handleGuildDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var3 = _closure1_slot9;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0008_ip = 33; continue _fun0008 }
 28:
            var2 = var4.id;
 33:
            var2 = delete var3[var2];
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/MemberVerificationFormStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_MEMBER_VERIFICATION_FORM'] = var2;
    return var1;
})();