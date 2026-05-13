// app/modules/quests/native/QuestRewardTile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppState;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.radii;
        var3 = var3.sm;
        var2['borderRadius'] = var3;
        var1['container'] = var2;
        var2 = {'overflow': 'hidden', 'height': '100%', 'width': '100%'};
        var1['video'] = var2;
        var2 = {'height': '100%', 'width': '100%'};
        var1['image'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestRewardTile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestRewardTile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.quest;
            var _closure2_slot0 = var7;
            var17 = var1.height;
            var _closure2_slot1 = var17;
            var16 = var1.width;
            var _closure2_slot2 = var16;
            var8 = var1.style;
            var12 = var1.paused;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var5 = var1.withAnimation;
            if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isIOS;
            var5 = var2.bind(var6)();
case 4:
            var2 = var1.accessibilityLabelPrefix;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var11 = var9.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var10.bind(var11)(var9, var1);
            var10 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getQuestPrimaryReward;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var4)(var1, var9);
            var10 = var9.name;
            var1 = null;
            if(!(var1 == var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var9.messages;
            var1 = var1.name;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = var9.name;
case 8:
            var10 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var3 = var7[var1];
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot0;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.QuestAssetType;
                var10 = var1.REWARD;
                var8 = true;
                var12 = var5;
                var11 = var3;
                var9 = undefined;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var14 = var10.bind(var4)(var7, var9);
            _closure2_slot3 = var14;
            var7 = _closure1_slot10;
            var9 = var7.bind(var4)();
            var15 = _closure1_slot4;
            var10 = var15.useState;
            var7 = _closure1_slot6;
            var13 = var7.currentState;
            var7 = 'active';
            var7 = var7 === var13;
            var13 = var10.bind(var15)(var7);
            var10 = _closure1_slot3;
            var7 = 2;
            var13 = var10.bind(var4)(var13, var7);
            var7 = 0;
            var10 = var13[var7];
            var7 = 1;
            var7 = var13[var7];
            _closure2_slot4 = var7;
            var18 = var15.useEffect;
            var7 = var14.isAnimated;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var2 = var2.isAnimated;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = undefined;
                    return var2;
case 9:
                    var5 = _closure1_slot6;
                    var4 = var5.addEventListener;
                    var3 = 'change';
                    var2 = function(arg1) {
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var4 = 'active';
                        var2 = arg1;
                        var2 = var4 === var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var7 = var18.bind(var15)(var7, var13);
            var13 = var15.useMemo;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var16;
            var7[2] = var17;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getScaledImageUrl;
                var1 = {};
                var5 = _closure2_slot3;
                var5 = var5.url;
                var1['assetUrl'] = var5;
                var5 = _closure2_slot2;
                var1['width'] = var5;
                var4 = _closure2_slot1;
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var15)(var3, var7);
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var1;
            var2 = var3.filter;
            var1 = global;
            var1 = var1.Boolean;
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ', ';
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot7;
            var1 = {};
            var1['accessibilityLabel'] = var7;
            var15 = var9.container;
            var7 = new Array(3);
            var7[0] = var15;
            var15 = {};
            var15['height'] = var17;
            var15['width'] = var16;
            var7[1] = var15;
            var7[2] = var8;
            var1['style'] = var7;
            var7 = var14.isAnimated;
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 12;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var15 = {};
            var15['uri'] = var13;
            var5['source'] = var15;
            var15 = var9.image;
            var5['style'] = var15;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 11;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.VideoComponent;
            var6 = {'style': null, 'source': null, 'disableFocus': true, 'preventsDisplaySleepDuringVideoPlayback': false, 'importantForAccessibility': 'no-hide-descendants', 'poster': null, 'resizeMode': 'cover'};
            var9 = var9.video;
            var6['style'] = var9;
            var9 = {};
            var14 = var14.url;
            var9['uri'] = var14;
            var6['source'] = var9;
            var9 = true;
            var6['poster'] = var13;
            var10 = !var10;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var12;
case 15:
            if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var11;
case 17:
            var6['paused'] = var10;
            var6['muted'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 14:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();