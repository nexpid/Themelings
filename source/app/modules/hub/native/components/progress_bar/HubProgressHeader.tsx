// app/modules/hub/native/components/progress_bar/HubProgressHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HUB_PROGRESS_ACTION_SHEET_ID;
    var _closure1_slot4 = var7;
    var4 = var4.HUB_PROGRESS_NUM_TOTAL_STEPS;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'overflow': 'hidden', 'height': null, 'padding': 16};
    var9['height'] = var10;
    var4['container'] = var9;
    var9 = {'width': 48, 'height': 48};
    var4['icon'] = var9;
    var9 = {'paddingVertical': 8, 'paddingLeft': 8, 'paddingRight': 12};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['innerContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/native/components/progress_bar/HubProgressHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HubProgressHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.guild;
            var _closure2_slot0 = var7;
            var10 = var1.onDirectoryPage;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var10 = false;
 28:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot7;
            var13 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 7;
            var2 = var1[var6];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useHubProgressBarCompletedSteps;
            var2 = var2.bind(var4)(var7);
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getNextHubProgressStep;
            var4 = var1.bind(var3)(var2);
            _closure2_slot2 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 494; continue _fun0001 }
 111:
            var15 = var2.size;
            if(!var10) { _fun0001_ip = 155; continue _fun0001 }
 119:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.HubProgressStep;
            var2 = var2.JOIN_GUILD;
            var10 = var4 === var2;
 155:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getHubProgressTitleForStep;
            var11 = var2.bind(var3)(var4);
            var2 = _closure1_slot5;
            if(!(!(var15 < var2))) { _fun0001_ip = 248; continue _fun0001 }
 191:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.+Gyklp;
            var8 = var3.bind(var4)(var2);
            _fun0001_ip = 342; continue _fun0001;
 248:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var4 = var7[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.9j7xDg;
            var2 = {};
            var7 = global;
            var7 = var7.HermesInternal;
            var14 = var7.concat;
            var7 = '';
            var7 = var14.bind(var7)(var15);
            var2['number'] = var7;
            var7 = _closure1_slot5;
            var2['total'] = var7;
            var8 = var4.bind(var6)(var3, var2);
 342:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var13.container;
            var2['style'] = var6;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 10;
            var6 = var14[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.FormCTA;
            var6 = {};
            var15 = var13.innerContainer;
            var6['style'] = var15;
            var13 = var13.icon;
            var6['iconStyle'] = var13;
            var12 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 10:
                    var3 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.HubProgressStep;
                    var2 = var2.JOIN_GUILD;
                    var1 = var3 === var2;
 55:
                    if(var1) { _fun0002_ip = 155; continue _fun0002 }
 58:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 11;
                    var3 = var2[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 13;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 12;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = _closure1_slot4;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['guild'] = var6;
                    var6 = 'Directory Channel Header';
                    var1['analyticsSource'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var12;
            var13 = _closure1_slot1;
            var12 = 14;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var6['iconSource'] = var12;
            var6['title'] = var11;
            var6['subtitle'] = var8;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 471; continue _fun0001 }
 455:
            var11 = _closure1_slot6;
            var10 = _closure1_slot3;
            var9 = {};
            var8 = var11.bind(var5)(var10, var9);
 471:
            var6['trailing'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 494:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();