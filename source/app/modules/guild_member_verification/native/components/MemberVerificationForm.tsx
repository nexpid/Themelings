// app/modules/guild_member_verification/native/components/MemberVerificationForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function useVerificationForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = var4.id;
            var _closure2_slot0 = var2;
            var3 = function useRequiredVerificationFields(arg1) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var6 = var5[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var6);
                var6 = var7.useInitialVerification;
                var4 = var4.id;
                var4 = var6.bind(var7)(var4);
                var _closure3_slot1 = var4;
                var4 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1.verificationLevel;
                        var1 = _closure1_slot9;
                        var1 = var1.VERY_HIGH;
                        if(!(var2 !== var1)) { _fun0002_ip = 99; continue _fun0002 }
 30:
                        var1 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 13;
                        var8 = var7[var2];
                        var5 = undefined;
                        var8 = var6.bind(var5)(var8);
                        var8 = var8.VerificationFormFieldTypes;
                        var8 = var8.VERIFICATION;
                        var1['field_type'] = var8;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var2 = var2.UserVerificationFieldPlatforms;
                        var2 = var2.EMAIL;
                        var1['platform'] = var2;
                        _fun0002_ip = 197; continue _fun0002;
 99:
                        var5 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var5)) { _fun0002_ip = 124; continue _fun0002 }
 109:
                        var3 = _closure3_slot1;
                        var3 = var3.phone;
                        var2 = null;
                        if(var3) { _fun0002_ip = 194; continue _fun0002 }
 124:
                        var3 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 13;
                        var8 = var7[var4];
                        var5 = undefined;
                        var8 = var6.bind(var5)(var8);
                        var8 = var8.VerificationFormFieldTypes;
                        var8 = var8.VERIFICATION;
                        var3['field_type'] = var8;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.UserVerificationFieldPlatforms;
                        var4 = var4.PHONE;
                        var3['platform'] = var4;
                        var2 = var3;
 194:
                        var1 = var2;
 197:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = undefined;
            var3 = var3.bind(var8)(var4);
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var7 = var4.bind(var8)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var7)(var4, var2, var3);
            var _closure2_slot2 = var3;
            var7 = _closure1_slot5;
            var5 = var7.useMemo;
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 114:
            var2 = var3.formFields;
 120:
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var5 = var2 == var1;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 55; continue _fun0003 }
 18:
                    var4 = _closure2_slot2;
                    var4 = var4.formFields;
                    var2 = var2 == var4;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 55; continue _fun0003 }
 37:
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.field_type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.VerificationFormFieldTypes;
                        var1 = var1.TERMS;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 55:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var4);
            var _closure2_slot3 = var2;
            var4 = function getFormFields() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0004_ip = 78; continue _fun0004 }
 10:
                    var1 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0004_ip = 78; continue _fun0004 }
 20:
                    var4 = _closure2_slot1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var4 = _closure2_slot2;
                    var5 = var2 == var4;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 55; continue _fun0004 }
 45:
                    var5 = _closure2_slot2;
                    var4 = var5.formFields;
 55:
                    if(!(var2 == var4)) { _fun0004_ip = 63; continue _fun0004 }
 59:
                    var4 = new Array(0);
 63:
                    var6 = 1;
                    var8 = var1;
                    var7 = var4;
                    var2 = arraySpread(var8, var7, var6);
                    _fun0004_ip = 130; continue _fun0004;
 78:
                    var4 = _closure2_slot2;
                    var2 = null;
                    var5 = var2 == var4;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 103; continue _fun0004 }
 93:
                    var3 = _closure2_slot2;
                    var4 = var3.formFields;
 103:
                    if(!(var2 == var4)) { _fun0004_ip = 111; continue _fun0004 }
 107:
                    var4 = new Array(0);
 111:
                    var2 = new Array(0);
                    var6 = 0;
                    var8 = var2;
                    var7 = var4;
                    var3 = arraySpread(var8, var7, var6);
                    var1 = var2;
 130:
                    return var1;
                }
            };
            var _closure2_slot4 = var4;
            var7 = _closure1_slot5;
            var5 = var7.useRef;
            var5 = var5.bind(var7)(var4);
            var _closure2_slot5 = var5;
            var9 = _closure1_slot5;
            var7 = var9.useEffect;
            var5 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot4;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = var7.bind(var9)(var5);
            var7 = _closure1_slot5;
            var5 = var7.useState;
            var4 = var4.bind(var8)();
            var7 = var5.bind(var7)(var4);
            var5 = _closure1_slot4;
            var4 = 2;
            var7 = var5.bind(var8)(var7, var4);
            var4 = 0;
            var5 = var7[var4];
            var4 = 1;
            var4 = var7[var4];
            var _closure2_slot6 = var4;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 37; continue _fun0005 }
 13:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot5;
                    var1 = var2.current;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var6);
            var1 = new Array(4);
            var1[0] = var5;
            var1[1] = var4;
            var1[2] = var3;
            var1[3] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NO_MEMBER_VERIFICATION_FORM;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerificationLevels;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'paddingHorizontal': 16, 'paddingVertical': 0};
    var4['container'] = var9;
    var9 = {'marginTop': 12, 'marginBottom': 12};
    var4['submitButton'] = var9;
    var9 = {'alignSelf': 'center', 'paddingVertical': 16, 'fontSize': 16};
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/MemberVerificationForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationForm(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var18 = var1.guild;
            var _closure2_slot0 = var18;
            var2 = var1.onSuccess;
            var _closure2_slot1 = var2;
            var8 = var1.onClose;
            var _closure2_slot2 = var8;
            var1 = _closure1_slot12;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useUserVerificationState;
            var9 = var1.bind(var2)();
            var _closure2_slot3 = var9;
            var1 = _closure1_slot13;
            var3 = var1.bind(var5)(var18);
            var2 = _closure1_slot4;
            var1 = 4;
            var2 = var2.bind(var5)(var3, var1);
            var7 = 0;
            var17 = var2[var7];
            var _closure2_slot4 = var17;
            var6 = 1;
            var1 = var2[var6];
            var _closure2_slot5 = var1;
            var12 = 2;
            var3 = var2[var12];
            var _closure2_slot6 = var3;
            var1 = 3;
            var2 = var2[var1];
            var _closure2_slot7 = var2;
            var10 = _closure1_slot5;
            var4 = var10.useState;
            var1 = false;
            var4 = var4.bind(var10)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var5)(var4, var12);
            var11 = var1[var7];
            var1 = var1[var6];
            var _closure2_slot8 = var1;
            var10 = _closure1_slot5;
            var4 = var10.useState;
            var1 = null;
            var10 = var4.bind(var10)(var1);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var10, var12);
            var15 = var4[var7];
            var4 = var4[var6];
            var _closure2_slot9 = var4;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = _closure1_slot8;
                    if(!(var3 === var2)) { _fun0007_ip = 41; continue _fun0007 }
 18:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 41; continue _fun0007 }
 28:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            var6 = _closure1_slot5;
            var4 = var6.useMemo;
            var7 = var18.verificationLevel;
            var3 = new Array(4);
            var3[0] = var7;
            var3[1] = var2;
            var3[2] = var9;
            var3[3] = var17;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 41; continue _fun0008 }
 13:
                    var4 = _closure2_slot4;
                    var3 = var4.some;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isValidFormResponse;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0008_ip = 278; continue _fun0008 }
 41:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0008_ip = 274; continue _fun0008 }
 51:
                    var1 = _closure2_slot0;
                    var4 = var1.verificationLevel;
                    var3 = _closure1_slot9;
                    var3 = var3.VERY_HIGH;
                    if(!(var3 !== var4)) { _fun0008_ip = 227; continue _fun0008 }
 81:
                    var3 = _closure1_slot9;
                    var3 = var3.HIGH;
                    if(!(var3 !== var4)) { _fun0008_ip = 137; continue _fun0008 }
 95:
                    var3 = _closure1_slot9;
                    var3 = var3.MEDIUM;
                    if(!(var3 !== var4)) { _fun0008_ip = 137; continue _fun0008 }
 109:
                    var3 = _closure1_slot9;
                    var3 = var3.LOW;
                    if(!(var3 !== var4)) { _fun0008_ip = 137; continue _fun0008 }
 123:
                    var3 = _closure1_slot9;
                    var3 = var3.NONE;
                    var3 = false;
                    return var3;
 137:
                    var4 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 13;
                    var3 = var3[var8];
                    var7 = undefined;
                    var3 = var5.bind(var7)(var3);
                    var3 = var3.UserVerificationFieldPlatforms;
                    var3 = var3.EMAIL;
                    var3 = var4[var3];
                    var3 = !var3;
                    if(!var3) { _fun0008_ip = 225; continue _fun0008 }
 185:
                    var5 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.UserVerificationFieldPlatforms;
                    var4 = var4.PHONE;
                    var4 = var5[var4];
                    var3 = !var4;
 225:
                    return var3;
 227:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.UserVerificationFieldPlatforms;
                    var1 = var1.PHONE;
                    var1 = var2[var1];
                    var1 = !var1;
                    return var1;
 274:
                    var1 = false;
                    return var1;
 278:
                    var1 = true;
                    return var1;
                }
            };
            var12 = var4.bind(var6)(var2, var3);
            var _closure2_slot10 = var12;
            if(!(var1 != var17)) { _fun0006_ip = 650; continue _fun0006 }
 311:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0009_ip = 581; continue _fun0009 }
 10:
                            var2 = undefined;
                            var5 = undefined;
                            var11 = undefined;
                            var9 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                            var4 = _closure2_slot10;
                            if(var4) { _fun0009_ip = 459; continue _fun0009 }
 35:
                            var4 = _closure2_slot9;
                            var8 = null;
                            var4 = var4.bind(var2)(var8);
                            var4 = _closure2_slot8;
                            var12 = true;
                            var4 = var4.bind(var2)(var12);
                            var13 = {};
                            var4 = _closure2_slot6;
                            if(!(var8 == var4)) { _fun0009_ip = 76; continue _fun0009 }
 67:
                            var4 = _closure1_slot8;
                            _fun0009_ip = 80; continue _fun0009;
 76:
                            var4 = _closure2_slot6;
 80:
                            var18 = var13;
                            var17 = var4;
                            var4 = copyDataProperties(var18, var17);
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = 15;
                            var14 = var16[var14];
                            var16 = var15.bind(var2)(var14);
                            var15 = var16.removeInternalFields;
                            var14 = _closure2_slot4;
                            var15 = var15.bind(var16)(var14);
                            var14 = 'formFields';
                            var13[var14] = var15;
                            var5 = var13;
 140: // try_start_0
                            var14 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var13 = 16;
                            var13 = var15[var13];
                            var15 = var14.bind(var2)(var13);
                            var14 = var15.submitVerificationForm;
                            var13 = _closure2_slot0;
                            var13 = var13.id;
                            var5 = var14.bind(var15)(var13, var5);
                            SaveGenerator(address=185);
 183:
                            return var5;
 185:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                            if(var13) { _fun0009_ip = 244; continue _fun0009 }
 191:
                            var11 = var5;
                            var14 = _closure2_slot8;
                            var13 = false;
                            var13 = var14.bind(var2)(var13);
                            var13 = _closure2_slot1;
                            if(!(var8 != var13)) { _fun0009_ip = 222; continue _fun0009 }
 213:
                            var13 = _closure2_slot1;
                            var11 = var13.bind(var2)(var11);
 222:
                            var11 = _closure2_slot2;
                            if(!(var8 != var11)) { _fun0009_ip = 239; continue _fun0009 }
 230:
                            var11 = _closure2_slot2;
                            var11 = var11.bind(var2)(var12);
 239: // try_end0
                            _fun0009_ip = 578; continue _fun0009;
 244:
                            return var5;
 247: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var10 = var5;
                            var11 = var8 == var5;
                            var5 = undefined;
                            if(var11) { _fun0009_ip = 266; continue _fun0009 }
 261:
                            var5 = var10.body;
 266:
                            var7 = var5;
                            var10 = var8 == var5;
                            var5 = undefined;
                            if(var10) { _fun0009_ip = 305; continue _fun0009 }
 278:
                            var10 = var7;
                            var10 = var10.errors;
                            var9 = var10;
                            var10 = var8 == var10;
                            var5 = undefined;
                            if(var10) { _fun0009_ip = 305; continue _fun0009 }
 299:
                            var5 = var9.version;
 305:
                            if(!(var8 == var5)) { _fun0009_ip = 380; continue _fun0009 }
 309:
                            var5 = var7;
                            var9 = var8 == var5;
                            var5 = undefined;
                            if(var9) { _fun0009_ip = 348; continue _fun0009 }
 321:
                            var9 = var7;
                            var9 = var9.errors;
                            var6 = var9;
                            var9 = var8 == var9;
                            var5 = undefined;
                            if(var9) { _fun0009_ip = 348; continue _fun0009 }
 342:
                            var5 = var6.form_fields;
 348:
                            if(!(var8 == var5)) { _fun0009_ip = 380; continue _fun0009 }
 352:
                            var6 = _closure2_slot9;
                            var5 = var7;
                            var8 = var8 == var5;
                            var5 = undefined;
                            if(var8) { _fun0009_ip = 373; continue _fun0009 }
 368:
                            var5 = var7.message;
 373:
                            var5 = var6.bind(var2)(var5);
                            _fun0009_ip = 446; continue _fun0009;
 380:
                            var5 = _closure2_slot9;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 9;
                            var6 = var9[var4];
                            var6 = var8.bind(var2)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4.PD09Sk;
                            var4 = var6.bind(var7)(var4);
                            var4 = var5.bind(var2)(var4);
 446:
                            var4 = _closure2_slot8;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            _fun0009_ip = 578; continue _fun0009;
 459:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 8;
                            var3 = var8[var3];
                            var5 = var7.bind(var2)(var3);
                            var4 = var5.open;
                            var3 = {};
                            var9 = 'MEMBER_VERIFICATION_FORM_INCOMPLETE';
                            var3['key'] = var9;
                            var11 = _closure1_slot0;
                            var6 = 9;
                            var9 = var8[var6];
                            var9 = var11.bind(var2)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var8[var6];
                            var6 = var11.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.StC49/;
                            var6 = var9.bind(var10)(var6);
                            var3['content'] = var6;
                            var6 = 10;
                            var6 = var8[var6];
                            var6 = var7.bind(var2)(var6);
                            var3['icon'] = var6;
                            var3 = var4.bind(var5)(var3);
 578:
                            return var2;
 581:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var10 = var2.bind(var5)();
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var16.container;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 17;
            var6 = var19[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var18 = var18.rulesChannelId;
            var6['rulesChannelId'] = var18;
            var6['formFields'] = var17;
            var14 = function onChange(arg1, arg2) {
                var7 = arg1;
                var6 = _closure2_slot4;
                var5 = var6[var7];
                var3 = _closure2_slot5;
                var1 = var6.slice;
                var4 = 0;
                var10 = var1.bind(var6)(var4, var7);
                var2 = new Array(1);
                var11 = var2;
                var9 = 0;
                var4 = arraySpread(var11, var10, var9);
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var8 = arg2;
                var5 = 'response';
                var1[var5] = var8;
                var2[var4] = var1;
                var1 = 1;
                var9 = var4 + var1;
                var5 = var6.slice;
                var1 = var7 + var1;
                var10 = var5.bind(var6)(var1);
                var11 = var2;
                var1 = arraySpread(var11, var10, var9);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onChange'] = var14;
            var6['verification'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var8 = var1 != var15;
            var7 = null;
            if(!var8) { _fun0006_ip = 464; continue _fun0006 }
 419:
            var14 = _closure1_slot10;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 18;
            var8 = var17[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var17 = var16.error;
            var8['style'] = var17;
            var8['children'] = var15;
            var7 = var14.bind(var5)(var9, var8);
 464:
            var6[1] = var7;
            var9 = _closure1_slot10;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 19;
            var7 = var17[var14];
            var8 = var15.bind(var5)(var7);
            var7 = {};
            var16 = var16.submitButton;
            var7['style'] = var16;
            var16 = var17[var14];
            var16 = var15.bind(var5)(var16);
            var16 = var16.Colors;
            var16 = var16.BRAND;
            var7['color'] = var16;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.Sizes;
            var14 = var14.MEDIUM;
            var7['size'] = var14;
            var16 = _closure1_slot0;
            var13 = 9;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.var9/DT0;
            var13 = var14.bind(var15)(var13);
            var7['text'] = var13;
            var7['loading'] = var11;
            if(var11) { _fun0006_ip = 620; continue _fun0006 }
 617:
            var11 = var12;
 620:
            var7['disabled'] = var11;
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 650:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();