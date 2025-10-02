// app/modules/build_overrides/native/BuildOverrideUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var9 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var10 = dependencyMap;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var10;
        var6 = function setBuildOverrideForBranch(arg1) {
            var3 = _closure1_slot7;
            var2 = {};
            var1 = 'branch';
            var2['type'] = var1;
            var1 = arg1;
            var2['id'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var _closure1_slot6 = var6;
        var5 = function setBuildOverride() {
            var1 = undefined;
            var4 = _closure1_slot8;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot7 = var5;
        var1 = function _setBuildOverride() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var2 = var3[var2];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.applyStaffBuildOverride;
                        var2 = {};
                        var8 = _closure1_slot5;
                        var7 = arg1;
                        var2[var8] = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=64);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var6 = var2.status;
                        var5 = 400;
                        if(!(var5 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 5;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.show;
                        var5 = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        var9 = var2.body;
                        var8 = _closure1_slot5;
                        var8 = var9[var8];
                        var5['body'] = var8;
                        var5 = var6.bind(var7)(var5);
                        _fun0002_ip = 10; continue _fun0002;
case 8:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.checkForUpdateAndReload;
                        var4 = var4.bind(var5)();
case 10:
                        return var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot8 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot8 = var1;
        var4 = function clearBuildOverride() {
            var1 = undefined;
            var4 = _closure1_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot9 = var4;
        var1 = function _clearBuildOverride() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 3:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.clearBuildOverride;
                        var2 = var2.bind(var5)();
                        SaveGenerator(address=49);
case 12:
                        return var2;
case 13:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var6 = var2.status;
                        var5 = 400;
                        if(!(var5 === var6)) { _fun0003_ip = 16; continue _fun0003 }
case 7:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 5;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.show;
                        var5 = {'title': 'Clear Override Error', 'body': null, 'isDismissable': true};
                        var8 = var2.body;
                        var5['body'] = var8;
                        var5 = var6.bind(var7)(var5);
                        _fun0003_ip = 17; continue _fun0003;
case 16:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.checkForUpdateAndReload;
                        var4 = var4.bind(var5)();
case 17:
                        return var3;
case 14:
                        return var2;
case 11:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot10 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot10 = var1;
        var1 = function _toggleOverride() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        var9 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var4 = _closure1_slot4;
                        var2 = var4.getCurrentBuildOverride;
                        var2 = var2.bind(var4)();
                        var5 = var2.overrides;
                        var6 = null;
                        var4 = var6 == var5;
                        var2 = undefined;
                        var7 = undefined;
                        if(var4) { _fun0004_ip = 20; continue _fun0004 }
case 13:
                        var4 = _closure1_slot5;
                        var4 = var5[var4];
                        var5 = var6 == var4;
                        var7 = undefined;
                        if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var7 = var4.id;
case 20:
                        var5 = _closure1_slot4;
                        var4 = var5.getBuildOverride;
                        var4 = var4.bind(var5)(var9);
                        var8 = var4.override;
                        var10 = var6 == var8;
                        var5 = undefined;
                        if(var10) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var10 = var8.targetBuildOverride;
                        var8 = var6 == var10;
                        var5 = undefined;
                        if(var8) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                        var8 = _closure1_slot5;
                        var8 = var10[var8];
                        var10 = var6 == var8;
                        var5 = undefined;
                        if(var10) { _fun0004_ip = 22; continue _fun0004 }
case 25:
                        var5 = var8.id;
case 22:
                        if(!(var7 !== var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var7 = var4.payload;
                        if(!(var6 != var7)) { _fun0004_ip = 28; continue _fun0004 }
case 17:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 6;
                        var7 = var10[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.isManualBuildOverrideLink;
                        var7 = var7.bind(var8)(var9);
                        if(!var7) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        if(!(var6 == var5)) { _fun0004_ip = 31; continue _fun0004 }
case 29:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 3;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.applyPublicBuildOverride;
                        var4 = var4.payload;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=240);
case 32:
                        return var4;
case 33:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var7 = var4.status;
                        var6 = 400;
                        if(!(var6 === var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 5;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.show;
                        var6 = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        var10 = var4.body;
                        var9 = _closure1_slot5;
                        var9 = var10[var9];
                        var6['body'] = var9;
                        var6 = var7.bind(var8)(var6);
                        _fun0004_ip = 28; continue _fun0004;
case 36:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 4;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.checkForUpdateAndReload;
                        var6 = var6.bind(var7)();
                        _fun0004_ip = 28; continue _fun0004;
case 34:
                        return var4;
case 31:
                        var4 = _closure1_slot6;
                        var4 = var4.bind(var2)(var5);
                        return var2;
case 26:
                        var3 = _closure1_slot9;
                        var3 = var3.bind(var2)();
case 28:
                        return var2;
case 18:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot11 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot11 = var1;
        var1 = function _setBuildOverrideFromLink() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 3:
                        var3 = _closure1_slot4;
                        var2 = var3.getCurrentBuildOverride;
                        var2 = var2.bind(var3)();
                        var5 = var2.overrides;
                        var6 = null;
                        var3 = var6 == var5;
                        var2 = undefined;
                        var7 = undefined;
                        if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var3 = _closure1_slot5;
                        var3 = var5[var3];
                        var5 = var6 == var3;
                        var7 = undefined;
                        if(var5) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                        var7 = var3.id;
case 39:
                        var8 = _closure1_slot4;
                        var5 = var8.getBuildOverride;
                        var3 = arg1;
                        var3 = var5.bind(var8)(var3);
                        var8 = var3.override;
                        var9 = var6 == var8;
                        var5 = undefined;
                        if(var9) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var9 = var8.targetBuildOverride;
                        var8 = var6 == var9;
                        var5 = undefined;
                        if(var8) { _fun0005_ip = 22; continue _fun0005 }
case 24:
                        var8 = _closure1_slot5;
                        var8 = var9[var8];
                        var9 = var6 == var8;
                        var5 = undefined;
                        if(var9) { _fun0005_ip = 22; continue _fun0005 }
case 25:
                        var5 = var8.id;
case 22:
                        if(!(var7 !== var5)) { _fun0005_ip = 42; continue _fun0005 }
case 27:
                        var5 = var3.payload;
                        if(!(var6 != var5)) { _fun0005_ip = 42; continue _fun0005 }
case 17:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 3;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.applyPublicBuildOverride;
                        var3 = var3.payload;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=199);
case 43:
                        return var3;
case 29:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var6 = var3.status;
                        var5 = 400;
                        if(!(var5 === var6)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 5;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.show;
                        var5 = {'title': 'Override Error', 'body': null, 'isDismissable': true};
                        var9 = var3.body;
                        var8 = _closure1_slot5;
                        var8 = var9[var8];
                        var5['body'] = var8;
                        var5 = var6.bind(var7)(var5);
                        _fun0005_ip = 42; continue _fun0005;
case 46:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.checkForUpdateAndReload;
                        var4 = var4.bind(var5)();
                        _fun0005_ip = 42; continue _fun0005;
case 44:
                        return var3;
case 42:
                        return var2;
case 38:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot12 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot12 = var1;
        var1 = global;
        var12 = var1.Object;
        var11 = var12.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var7);
        var1 = 0;
        var7 = var10[var1];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var7 = 1;
        var7 = var10[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var7 = 2;
        var7 = var10[var7];
        var8 = var9.bind(var1)(var7);
        var7 = var8.isAndroid;
        var8 = var7.bind(var8)();
        var7 = 'discord_ios';
        if(!var8) { _fun0001_ip = 48; continue _fun0001 }
case 6:
        var7 = 'discord_android';
case 48:
        var _closure1_slot5 = var7;
        var8 = 7;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/build_overrides/native/BuildOverrideUtils.tsx';
        var8 = var9.bind(var10)(var8);
        var3['DEVICE_FIELD'] = var7;
        var3['setBuildOverrideForBranch'] = var6;
        var6 = function setBuildOverrideForId(arg1) {
            var3 = _closure1_slot7;
            var2 = {};
            var1 = 'id';
            var2['type'] = var1;
            var1 = arg1;
            var2['id'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3['setBuildOverrideForId'] = var6;
        var3['setBuildOverride'] = var5;
        var5 = function refreshBuildOverride() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.checkForUpdateAndReload;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3['refreshBuildOverride'] = var5;
        var3['clearBuildOverride'] = var4;
        var4 = function toggleOverride() {
            var1 = undefined;
            var4 = _closure1_slot11;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['toggleOverride'] = var4;
        var2 = function setBuildOverrideFromLink() {
            var1 = undefined;
            var4 = _closure1_slot12;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setBuildOverrideFromLink'] = var2;
        return var1;
    }
})();