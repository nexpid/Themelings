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
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 7;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.radii;
        var4 = var4.sm;
        var2['borderRadius'] = var4;
        var4 = 'center';
        var1['container'] = var2;
        var2 = {'overflow': 'hidden', 'height': '100%', 'width': '100%'};
        var1['video'] = var2;
        var2 = {'height': '100%', 'width': '100%'};
        var1['image'] = var2;
        var2 = {};
        var3 = _closure1_slot8;
        var7 = var3.absoluteFillObject;
        var8 = var2;
        var3 = copyDataProperties(var8, var7);
        var3 = 'justifyContent';
        var2[var3] = var4;
        var3 = 'alignItems';
        var2[var3] = var4;
        var1['loader'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestRewardTile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestRewardTile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.quest;
            var _closure2_slot0 = var2;
            var18 = var3.height;
            var _closure2_slot1 = var18;
            var17 = var3.width;
            var _closure2_slot2 = var17;
            var15 = var3.style;
            var12 = var3.paused;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var12 = false;
 52:
            var5 = var3.withAnimation;
            if(!(var5 === var4)) { _fun0001_ip = 95; continue _fun0001 }
 62:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var5 = var3.bind(var6)();
 95:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var8.bind(var9)(var7, var3);
            var8 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getQuestPrimaryReward;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var4)(var3, var7);
            var8 = var3.name;
            var7 = null;
            if(!(var7 == var8)) { _fun0001_ip = 205; continue _fun0001 }
 192:
            var7 = var3.messages;
            var8 = var7.name;
            _fun0001_ip = 210; continue _fun0001;
 205:
            var8 = var3.name;
 210:
            var7 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
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
            var14 = var7.bind(var4)(var2, var3);
            _closure2_slot3 = var14;
            var2 = _closure1_slot12;
            var9 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = _closure1_slot6;
            var10 = var2.currentState;
            var2 = 'active';
            var2 = var2 === var10;
            var10 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var10, var2);
            var2 = 0;
            var10 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot4 = var2;
            var13 = var7.useEffect;
            var2 = var14.isAnimated;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var2 = var2.isAnimated;
                    if(var2) { _fun0002_ip = 22; continue _fun0002 }
 18:
                    var2 = undefined;
                    return var2;
 22:
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
            var2 = var13.bind(var7)(var2, var3);
            var3 = var7.useMemo;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var17;
            var2[2] = var18;
            var1 = function() {
                var3 = global;
                var6 = var3.Math;
                var5 = var6.ceil;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var4 = undefined;
                var1 = var8.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var6 = var5.bind(var6)(var1);
                var9 = var3.Math;
                var8 = var9.ceil;
                var5 = _closure2_slot2;
                var5 = var8.bind(var9)(var5);
                var5 = var5 * var6;
                var9 = var3.Math;
                var8 = var9.ceil;
                var3 = _closure2_slot1;
                var3 = var8.bind(var9)(var3);
                var6 = var3 * var6;
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.getAssetUrlWithMediaProxyQueryParams;
                var1 = _closure2_slot3;
                var2 = var1.url;
                var1 = {};
                var1['height'] = var6;
                var1['width'] = var5;
                var5 = 'webp';
                var1['format'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var13 = var3.bind(var7)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.MobileVideoQuestRewardTileAnimationExperiment;
            var3 = var7.useExperiment;
            var2 = {};
            var1 = _closure1_slot10;
            var1 = var1.VIDEO_MODAL_MOBILE;
            var2['location'] = var1;
            var1 = {};
            var16 = false;
            var1['autoTrackExposure'] = var16;
            var1 = var3.bind(var7)(var2, var1);
            var7 = var1.animationEnabled;
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var1['accessibilityLabel'] = var8;
            var16 = var9.container;
            var8 = new Array(3);
            var8[0] = var16;
            var16 = {};
            var16['height'] = var18;
            var16['width'] = var17;
            var8[1] = var16;
            var8[2] = var15;
            var1['style'] = var8;
            if(!var7) { _fun0001_ip = 508; continue _fun0001 }
 496:
            var7 = var14.isAnimated;
            if(!var7) { _fun0001_ip = 508; continue _fun0001 }
 505:
            if(var5) { _fun0001_ip = 563; continue _fun0001 }
 508:
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 15;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var15 = {};
            var15['uri'] = var13;
            var5['source'] = var15;
            var15 = var9.image;
            var5['style'] = var15;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 685; continue _fun0001;
 563:
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 14;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.VideoComponent;
            var6 = {'style': null, 'source': null, 'disableFocus': true, 'importantForAccessibility': 'no-hide-descendants', 'poster': null, 'resizeMode': 'cover'};
            var9 = var9.video;
            var6['style'] = var9;
            var9 = {};
            var14 = var14.url;
            var9['uri'] = var14;
            var6['source'] = var9;
            var9 = true;
            var6['poster'] = var13;
            var10 = !var10;
            if(var10) { _fun0001_ip = 654; continue _fun0001 }
 651:
            var10 = var12;
 654:
            if(var10) { _fun0001_ip = 660; continue _fun0001 }
 657:
            var10 = var11;
 660:
            var6['paused'] = var10;
            var10 = 'mix';
            var6['mixWithOthers'] = var10;
            var6['muted'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 685:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();