// app/modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = {};
    var1 = function getTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.5Qu1IS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getTitle'] = var1;
    var1 = function getDisabledTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.YdZZtL;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getDisabledTitle'] = var1;
    var1 = function getDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Vzp5BA;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getDescription'] = var1;
    var8 = 3;
    var7 = var6[var8];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.ReportSubType;
    var9 = var7.SUB_CSAM;
    var7 = new Array(5);
    var7[0] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ReportSubType;
    var9 = var9.SUB_LOLI;
    var7[1] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ReportSubType;
    var9 = var9.SUB_NCP;
    var7[2] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ReportSubType;
    var9 = var9.SUB_SEXUALLY_DEGRADING_CONTENT;
    var7[3] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ReportSubType;
    var8 = var8.SUB_UNSOLICITED_PORN;
    var7[4] = var8;
    var2['eligibleReportSubtypes'] = var7;
    var7 = function onApply() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var2 = var5[var1];
            var6 = undefined;
            var3 = var11.bind(var6)(var2);
            var2 = var3.updateExplicitContentSetting;
            var1 = var5[var1];
            var7 = var11.bind(var6)(var1);
            var1 = var7.getExplicitContentSettingOrDefault;
            var1 = var1.bind(var7)();
            var10 = var1.explicitContentGuilds;
            var9 = var1.explicitContentFriendDm;
            var8 = var1.explicitContentNonFriendDm;
            var1 = {};
            var7 = 1;
            var5 = var5[var7];
            var5 = var11.bind(var6)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.SHOW;
            if(!(var10 === var5)) { _fun0001_ip = 132; continue _fun0001 }
 97:
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var10.bind(var6)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.BLUR;
            var1['explicitContentGuilds'] = var5;
 132:
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var10.bind(var6)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.SHOW;
            if(!(var9 === var5)) { _fun0001_ip = 200; continue _fun0001 }
 165:
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.BLUR;
            var1['explicitContentFriendDm'] = var5;
 200:
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.SHOW;
            if(!(var8 === var5)) { _fun0001_ip = 268; continue _fun0001 }
 233:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ExplicitContentRedaction;
            var4 = var4.BLUR;
            var1['explicitContentNonFriendDm'] = var4;
 268:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['onApply'] = var7;
    var4 = function predicate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 0;
            var3 = var1[var3];
            var5 = undefined;
            var4 = var8.bind(var5)(var3);
            var3 = var4.getExplicitContentSettingOrDefault;
            var3 = var3.bind(var4)();
            var4 = var3.explicitContentGuilds;
            var7 = var3.explicitContentFriendDm;
            var3 = var3.explicitContentNonFriendDm;
            var6 = 1;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ExplicitContentRedaction;
            var1 = var1.SHOW;
            var1 = var4 === var1;
            if(var1) { _fun0002_ip = 116; continue _fun0002 }
 83:
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.ExplicitContentRedaction;
            var4 = var4.SHOW;
            var1 = var7 === var4;
 116:
            if(var1) { _fun0002_ip = 152; continue _fun0002 }
 119:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.SHOW;
            var1 = var3 === var2;
 152:
            return var1;
        }
    };
    var2['predicate'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/IarSettingsUpsellsConfigSensitiveMedia.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();