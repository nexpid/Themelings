// app/modules/guild_member_verification/MemberVerificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AUTOMATIC_APPROVAL_FORM_FIELDS;
    var _closure1_slot2 = var7;
    var4 = var4.MANUAL_APPROVAL_FORM_FIELDS;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/MemberVerificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.required;
            var3 = var2.response;
            var5 = var2.field_type;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = true;
            return var1;
case 2:
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 2;
            var4 = var2[var7];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var4 = var4.VerificationFormFieldTypes;
            var4 = var4.TERMS;
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var2)(var4);
            var4 = var4.VerificationFormFieldTypes;
            var4 = var4.VERIFICATION;
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var2)(var4);
            var4 = var4.VerificationFormFieldTypes;
            var4 = var4.TEXT_INPUT;
            if(!(var4 !== var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var2)(var4);
            var4 = var4.VerificationFormFieldTypes;
            var4 = var4.PARAGRAPH;
            if(!(var4 !== var5)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var2)(var4);
            var4 = var4.VerificationFormFieldTypes;
            var4 = var4.MULTIPLE_CHOICE;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var4 = var4.bind(var2)(var1);
            var1 = var4.assertNever;
            var1 = var1.bind(var4)(var5);
            return var1;
case 12:
            var4 = 'number';
            var1 = typeof var3;
            var1 = var4 === var1;
            return var1;
case 9:
            var4 = 'string';
            var1 = typeof var3;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3.trim;
            var5 = var4.bind(var3)();
            var4 = '';
            var1 = var4 !== var5;
case 14:
            return var1;
case 6:
            var1 = global;
            var1 = var1.Boolean;
            var1 = var1.bind(var2)(var3);
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['isValidFormResponse'] = var4;
    var4 = function removeInternalFields(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.field_type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.VerificationFormFieldTypes;
            var1 = var1.VERIFICATION;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['removeInternalFields'] = var4;
    var4 = function isAutomaticApprovalFormField(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot2;
            var2 = var3.has;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var4.field_type;
case 16:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['isAutomaticApprovalFormField'] = var4;
    var4 = function isManualApprovalFormField(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot3;
            var2 = var3.has;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var4.field_type;
case 16:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['isManualApprovalFormField'] = var4;
    var2 = function guildHasVerificationGate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot4;
            var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
            var1 = var3.bind(var4)(var2);
case 18:
            return var1;
        }
    };
    var3['guildHasVerificationGate'] = var2;
    return var1;
})();