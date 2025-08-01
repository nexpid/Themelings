// app/modules/guild_progress/native/components/ProgressItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var4 = 8;
    var10['marginBottom'] = var4;
    var7['formCTAContainer'] = var10;
    var10 = {};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CARD_PRIMARY_BG;
    var10['backgroundColor'] = var11;
    var7['formCTA'] = var10;
    var10 = {};
    var11 = '100%';
    var10['width'] = var11;
    var7['formCTAFullWidth'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_progress/native/components/ProgressItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProgressItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.title;
            var11 = var2.source;
            var12 = var2.onPress;
            var _closure2_slot0 = var12;
            var7 = var2.isCompleted;
            var _closure2_slot1 = var7;
            var8 = var2.description;
            var13 = var2.analyticsSetupType;
            var _closure2_slot2 = var13;
            var14 = var2.analyticsAction;
            var _closure2_slot3 = var14;
            var9 = var2.renderEndComponent;
            var16 = var2.fullWidth;
            var2 = _closure1_slot7;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(4);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 24; continue _fun0002 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0002_ip = 104; continue _fun0002 }
 27:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot5;
                    var3 = var2.SERVER_SETUP_CTA_CLICKED;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['setup_type'] = var6;
                    var6 = _closure2_slot3;
                    var2['action'] = var6;
                    var6 = _closure2_slot1;
                    var2['action_completed'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 104:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var12 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var15.formCTAContainer;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 7;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.FormCTA;
            var5 = {};
            var13 = 'row-button';
            var5['variant'] = var13;
            var14 = var15.formCTA;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = undefined;
            if(!var16) { _fun0001_ip = 209; continue _fun0001 }
 203:
            var14 = var15.formCTAFullWidth;
 209:
            var13[1] = var14;
            var5['style'] = var13;
            var5['onPress'] = var12;
            var5['iconSource'] = var11;
            var5['title'] = var10;
            var5['subtitle'] = var8;
            var5['completed'] = var7;
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 255; continue _fun0001 }
 251:
            var8 = var9.bind(var4)();
 255:
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 267; continue _fun0001 }
 264:
            var7 = var8;
 267:
            var5['trailing'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();