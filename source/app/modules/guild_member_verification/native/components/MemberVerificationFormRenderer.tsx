// app/modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Keyboard;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'paddingHorizontal': 0};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationFormRenderer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.rulesChannelId;
            var _closure2_slot0 = var2;
            var8 = var1.formFields;
            var2 = var1.onChange;
            var _closure2_slot1 = var2;
            var1 = var1.verification;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot6;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 == var8;
            var5 = undefined;
            if(var7) { _fun0001_ip = 99; continue _fun0001 }
 84:
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = arg2;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'verification-field-';
                var4 = var2.bind(var1)(var5);
                var3 = function(arg1, arg2, arg3) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var7 = arg1;
                        var5 = arg3;
                        var1 = arg2;
                        var _closure4_slot0 = var1;
                        var3 = var7.field_type;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 4;
                        var2 = var2[var9];
                        var4 = undefined;
                        var2 = var8.bind(var4)(var2);
                        var2 = var2.VerificationFormFieldTypes;
                        var2 = var2.TERMS;
                        if(!(var2 !== var3)) { _fun0002_ip = 409; continue _fun0002 }
 65:
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var8.bind(var4)(var2);
                        var2 = var2.VerificationFormFieldTypes;
                        var2 = var2.VERIFICATION;
                        if(!(var2 !== var3)) { _fun0002_ip = 357; continue _fun0002 }
 101:
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var8.bind(var4)(var2);
                        var2 = var2.VerificationFormFieldTypes;
                        var2 = var2.TEXT_INPUT;
                        if(!(var2 !== var3)) { _fun0002_ip = 307; continue _fun0002 }
 137:
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var8.bind(var4)(var2);
                        var2 = var2.VerificationFormFieldTypes;
                        var2 = var2.PARAGRAPH;
                        if(!(var2 !== var3)) { _fun0002_ip = 257; continue _fun0002 }
 170:
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var2 = var8.bind(var4)(var2);
                        var2 = var2.VerificationFormFieldTypes;
                        var2 = var2.MULTIPLE_CHOICE;
                        if(!(var2 !== var3)) { _fun0002_ip = 207; continue _fun0002 }
 203:
                        var2 = null;
                        return var2;
 207:
                        var8 = _closure1_slot5;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var2 = var9[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['field'] = var7;
                        var9 = function onChange(arg1) {
                            var4 = _closure2_slot1;
                            var3 = _closure4_slot0;
                            var1 = undefined;
                            var2 = arg1;
                            var2 = var4.bind(var1)(var3, var2);
                            var3 = _closure1_slot3;
                            var2 = var3.dismiss;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var2['onChange'] = var9;
                        var2 = var8.bind(var4)(var3, var2, var5);
                        return var2;
 257:
                        var8 = _closure1_slot5;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 8;
                        var2 = var9[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['field'] = var7;
                        var9 = function onChange(arg1) {
                            var4 = _closure2_slot1;
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var3, var1);
                            return var1;
                        };
                        var2['onChange'] = var9;
                        var2 = var8.bind(var4)(var3, var2, var5);
                        return var2;
 307:
                        var8 = _closure1_slot5;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['field'] = var7;
                        var9 = function onChange(arg1) {
                            var4 = _closure2_slot1;
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var3, var1);
                            return var1;
                        };
                        var2['onChange'] = var9;
                        var2 = var8.bind(var4)(var3, var2, var5);
                        return var2;
 357:
                        var8 = _closure1_slot5;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 6;
                        var2 = var9[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var9 = _closure2_slot2;
                        var2['verification'] = var9;
                        var2['field'] = var7;
                        var2 = var8.bind(var4)(var3, var2, var5);
                        return var2;
 409:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 5;
                        var1 = var8[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var1['field'] = var7;
                        var7 = _closure2_slot0;
                        var1['rulesChannelId'] = var7;
                        var6 = function onChange(arg1) {
                            var4 = _closure2_slot1;
                            var3 = _closure4_slot0;
                            var1 = undefined;
                            var2 = arg1;
                            var2 = var4.bind(var1)(var3, var2);
                            var3 = _closure1_slot3;
                            var2 = var3.dismiss;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var1['onChange'] = var6;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var5, var4);
                return var1;
            };
            var5 = var7.bind(var8)(var6);
 99:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();