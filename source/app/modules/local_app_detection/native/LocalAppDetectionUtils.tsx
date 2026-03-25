// app/modules/local_app_detection/native/LocalAppDetectionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function isGameCommunityUpsellMultiExperimentEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.GameCommunityUpsellMultiExperiment;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'LocalAppDetectionUtils';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function isEitherUpsellExperimentEnabled() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var5 = var1.GameCommunityUpsellExperiment;
            var4 = var5.getConfig;
            var1 = {};
            var6 = 'LocalAppDetectionUtils';
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            var1 = var1.enabled;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = _closure1_slot9;
            var1 = var2.bind(var3)();
case 35:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getDetectableApp(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var3 = var1[var6];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.ROBLOX;
            if(!(var3 !== var4)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.MINECRAFT;
            if(!(var3 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.FORTNITE;
            if(!(var3 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.GENSHIN;
            if(!(var3 !== var4)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.PUBG_MOBILE;
            if(!(var3 !== var4)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.CALL_OF_DUTY_MOBILE;
            if(!(var3 !== var4)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.CLASH_OF_CLANS;
            if(!(var3 !== var4)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.MOBILE_LEGENDS_BANG_BANG;
            if(!(var3 !== var4)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.GARENA_FREE_FIRE;
            if(!(var3 !== var4)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.POKEMON_GO;
            if(!(var3 !== var4)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.POKEMON_TCG_POCKET;
            if(!(var3 !== var4)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.CLASH_ROYALE;
            if(!(var3 !== var4)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.AMONG_US;
            if(!(var3 !== var4)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.MONOPOLY_GO;
            if(!(var3 !== var4)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.BRAWL_STARS;
            if(!(var3 !== var4)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.BRAWLHALLA;
            if(!(var3 !== var4)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var1)(var3);
            var3 = var3.DetectableAppNames;
            var3 = var3.WUTHERING_WAVES;
            if(!(var3 !== var4)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            return var1;
case 69:
            var1 = {'androidScheme': 'wutheringwaves', 'iosScheme': 'akioversea'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 67:
            var1 = {'androidScheme': 'brawlhalla', 'iosScheme': null};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 65:
            var1 = {'androidScheme': 'brawlstars', 'iosScheme': 'brawlstars'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 63:
            var1 = {'androidScheme': 'monopolygo', 'iosScheme': 'monopolygo'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 61:
            var1 = {'androidScheme': 'amongus', 'iosScheme': 'amongus'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 59:
            var1 = {'androidScheme': 'clashroyale', 'iosScheme': 'clashroyale'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 57:
            var1 = {'androidScheme': 'pokemontcgp', 'iosScheme': 'pokemontcgp'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 55:
            var1 = {'androidScheme': 'pokemongo', 'iosScheme': 'pokemongo'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 53:
            var1 = {'androidScheme': 'garenafreefire', 'iosScheme': 'freefire'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 51:
            var1 = {'androidScheme': 'mobilelegends', 'iosScheme': 'mobilelegends'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 49:
            var1 = {'androidScheme': 'clashofclans', 'iosScheme': 'clashofclans'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 47:
            var1 = {'androidScheme': 'codm', 'iosScheme': 'codm'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 45:
            var1 = {'androidScheme': 'pubgmobile', 'iosScheme': 'igame1320'};
            var3 = _closure1_slot9;
            var1['predicate'] = var3;
            return var1;
case 43:
            var1 = {'androidScheme': 'genshin', 'iosScheme': 'genshin'};
            var3 = _closure1_slot10;
            var1['predicate'] = var3;
            return var1;
case 41:
            var1 = {'androidScheme': 'fortnite', 'iosScheme': 'com.epicgames.fortnite'};
            var3 = _closure1_slot10;
            var1['predicate'] = var3;
            return var1;
case 39:
            var1 = {'androidScheme': 'minecraft', 'iosScheme': 'minecraft'};
            var2 = _closure1_slot10;
            var1['predicate'] = var2;
            return var1;
case 37:
            var1 = {'androidScheme': 'roblox', 'iosScheme': 'roblox'};
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _detectLocalApps() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                    var6 = {};
                    var5 = _closure1_slot4;
                    var4 = var5.hasConsented;
                    var3 = _closure1_slot6;
                    var3 = var3.PERSONALIZATION;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0006_ip = 73; continue _fun0006 }
case 2:
                    var4 = _closure1_slot7;
                    var13 = undefined;
                    var3 = arg1;
                    var12 = var4.bind(var13)(var3);
                    var4 = var12.bind(var13)();
                    var3 = var4.done;
                    var11 = 7;
                    var10 = 6;
                    var9 = false;
                    var8 = null;
                    var7 = 5;
                    var5 = var4;
                    if(var3) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var4 = var5.value;
                    var3 = _closure1_slot11;
                    var15 = var3.bind(var13)(var4);
                    var14 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var14 = var14.bind(var13)(var3);
                    var3 = var14.isIOS;
                    var3 = var3.bind(var14)();
                    if(var3) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                    var17 = var15.androidScheme;
                    _fun0006_ip = 77; continue _fun0006;
case 75:
                    var17 = var15.iosScheme;
case 77:
                    if(!(var8 != var17)) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var3 = var15.predicate;
                    var14 = var8 == var3;
                    var3 = undefined;
                    if(var14) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                    var14 = var15.predicate;
                    var3 = var14.bind(var15)();
case 80:
                    if(!(var9 === var3)) { _fun0006_ip = 82; continue _fun0006 }
case 78:
                    var6[var4] = var9;
                    _fun0006_ip = 83; continue _fun0006;
case 82:
                    var14 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var14 = var14.bind(var13)(var3);
                    var3 = var14.canOpenUrlScheme;
                    var3 = var3.bind(var14)(var17);
                    SaveGenerator(address=220);
case 84:
                    return var3;
case 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                    if(var14) { _fun0006_ip = 86; continue _fun0006 }
case 87:
                    var6[var4] = var3;
                    var14 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var16 = var14.bind(var13)(var4);
                    var15 = var16.track;
                    var4 = _closure1_slot5;
                    var14 = var4.CAN_OPEN_URL_REQUESTED;
                    var4 = {};
                    var4['scheme'] = var17;
                    var4['result'] = var3;
                    var4 = var15.bind(var16)(var14, var4);
case 83:
                    var14 = var12.bind(var13)();
                    var4 = var14.done;
                    var5 = var14;
                    if(var4) { _fun0006_ip = 73; continue _fun0006 }
case 88:
                    _fun0006_ip = 74; continue _fun0006;
case 86:
                    return var3;
case 73:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'LOCAL_APP_DETECTION_COMPLETE';
                    var3['type'] = var7;
                    var3['result'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 71:
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.Consents;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_app_detection/native/LocalAppDetectionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function detectLocalApps() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['detectLocalApps'] = var2;
    return var1;
})();