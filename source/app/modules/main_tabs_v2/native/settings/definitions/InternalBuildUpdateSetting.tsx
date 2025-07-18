// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RendererType;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = {'type': null, 'title': 'Internal Build Update', 'parent': null};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = function InstallNativeUpdateIcon() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.latestFetchedBuild;
                var1 = var1.bind(var2)();
                var2 = var1.newBuild;
                var1 = null;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var3 = _closure1_slot5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            if(var1) { _fun0001_ip = 92; continue _fun0001 }
 72:
            var1 = 8;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var2 = var1.RefreshIcon;
            _fun0001_ip = 110; continue _fun0001;
 92:
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var2 = var1.DownloadIcon;
 110:
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['IconComponent'] = var8;
    var8 = function useInternalBuildUpdateDescription() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 4;
            var5 = var7[var3];
            var4 = undefined;
            var11 = var6.bind(var4)(var5);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.latestFetchedBuild;
                    var1 = var1.bind(var2)();
                    var2 = var1.newBuild;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 40; continue _fun0003 }
 34:
                    var1 = var2.build;
 40:
                    return var1;
                }
            };
            var5 = var10.bind(var11)(var9, var5);
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.latestFetchedBuild;
                var1 = var1.bind(var2)();
                var1 = var1.lastCheck;
                return var1;
            };
            var3 = var6.bind(var7)(var3, var1);
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 172; continue _fun0002 }
 98:
            var6 = var1 != var3;
            var1 = 'Never refreshed';
            if(!var6) { _fun0002_ip = 170; continue _fun0002 }
 111:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 5;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.bind(var4)(var3);
            var2 = var3.fromNow;
            var4 = var2.bind(var3)();
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Last refreshed ';
            var1 = var3.bind(var2)(var4);
 170:
            _fun0002_ip = 203; continue _fun0002;
 172:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'Open build ';
            var2 = ' installer in a browser';
            var1 = var4.bind(var3)(var5, var2);
 203:
            return var1;
        }
    };
    var2['useDescription'] = var8;
    var8 = function useHasInternalBuildUpdateSetting() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.useStaffOrDevEnvSettingPredicate;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot4;
            var1 = var1.hasUpdatesConfigured;
            if(!var1) { _fun0004_ip = 51; continue _fun0004 }
 48:
            var1 = var2;
 51:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var7 = function handleInstallNativeUpdateSettingPress() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.latestFetchedBuild;
            var2 = var2.bind(var3)();
            var3 = var2.newBuild;
            var2 = null;
            if(!(var2 === var3)) { _fun0005_ip = 45; continue _fun0005 }
 29:
            var4 = _closure1_slot4;
            var2 = var4.checkForNewerBuild;
            var2 = var2.bind(var4)();
            _fun0005_ip = 78; continue _fun0005;
 45:
            var4 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.openBuildInstaller;
            var1 = var1.bind(var2)(var3);
 78:
            var1 = undefined;
            return var1;
        }
    };
    var2['onPress'] = var7;
    var2['withArrow'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();