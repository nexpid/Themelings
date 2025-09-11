// app/modules/messages/native/burst_reactions/BurstReactionAnimation.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/burst_reactions/BurstReactionAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BurstReactionAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var13 = var7.channelId;
            var14 = var7.messageId;
            var15 = var7.emoji;
            var12 = var7.isFullscreen;
            var3 = var7.onComplete;
            var6 = var7.withFadeOut;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 44; continue _fun0001 }
 42:
            var6 = true;
 44:
            var4 = {'channelId': 0, 'messageId': 0, 'emoji': 0, 'isFullscreen': 0, 'onComplete': 0, 'withFadeOut': 0};
            var1 = null;
            var18 = var4;
            var17 = null;
            var2 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var7;
            var16 = var4;
            var8 = copyDataProperties(var18, var17, var16);
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var11 = var4.bind(var5)(var2);
            var7 = var11.useBurstReactionAnimationSource;
            var2 = {};
            var2['emoji'] = var15;
            var2['messageId'] = var14;
            var2['channelId'] = var13;
            var2['isFullscreen'] = var12;
            var7 = var7.bind(var11)(var2);
            var2 = 5;
            var2 = var10[var2];
            var11 = var4.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var10 = var10.bind(var11)(var4, var2);
            if(!(var1 != var7)) { _fun0001_ip = 329; continue _fun0001 }
 183:
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            if(var6) { _fun0001_ip = 203; continue _fun0001 }
 194:
            var2 = 7;
            var2 = var12[var2];
            _fun0001_ip = 210; continue _fun0001;
 203:
            var11 = 6;
            var2 = var12[var11];
 210:
            var4 = var4.bind(var5)(var2);
            var2 = {};
            if(var6) { _fun0001_ip = 230; continue _fun0001 }
 220:
            var2['onAnimationFinish'] = var3;
            var6 = var2;
            _fun0001_ip = 238; continue _fun0001;
 230:
            var2['onComplete'] = var3;
            var6 = var2;
 238:
            var3 = _closure1_slot4;
            var2 = {};
            var9 = _closure1_slot5;
            var9 = var9.content;
            var2['style'] = var9;
            var9 = false;
            var2['loop'] = var9;
            var9 = 1.2;
            if(!var10) { _fun0001_ip = 287; continue _fun0001 }
 277:
            var9 = 0.5;
 287:
            var2['speed'] = var9;
            var18 = var2;
            var17 = var8;
            var8 = copyDataProperties(var18, var17);
            var18 = var2;
            var17 = var6;
            var6 = copyDataProperties(var18, var17);
            var6 = 'source';
            var2[var6] = var7;
            var2 = var3.bind(var5)(var4, var2);
            return var2;
 329:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();