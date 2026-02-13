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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
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
case 0:
            var4 = arg1;
            var14 = var4.channelId;
            var15 = var4.messageId;
            var16 = var4.emoji;
            var13 = var4.isFullscreen;
            var11 = var4.onComplete;
            var6 = var4.withFadeOut;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var3 = {'channelId': 0, 'messageId': 0, 'emoji': 0, 'isFullscreen': 0, 'onComplete': 0, 'withFadeOut': 0};
            var1 = null;
            var19 = var3;
            var18 = null;
            var2 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var4;
            var17 = var3;
            var8 = copyDataProperties(var19, var18, var17);
            var3 = _closure1_slot5;
            var9 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var12 = var4.bind(var5)(var3);
            var7 = var12.useBurstReactionAnimationSource;
            var3 = {};
            var3['emoji'] = var16;
            var3['messageId'] = var15;
            var3['channelId'] = var14;
            var3['isFullscreen'] = var13;
            var7 = var7.bind(var12)(var3);
            var3 = 5;
            var3 = var10[var3];
            var12 = var4.bind(var5)(var3);
            var10 = var12.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var10 = var10.bind(var12)(var4, var3);
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 7;
            var3 = var13[var3];
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var12 = 6;
            var3 = var13[var12];
case 8:
            var4 = var4.bind(var5)(var3);
            var3 = {};
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3['onAnimationFinish'] = var11;
            var6 = var3;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var3['onComplete'] = var11;
            var6 = var3;
case 11:
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var9.content;
            var2['style'] = var9;
            var9 = false;
            var2['loop'] = var9;
            var9 = 1.2;
            if(!var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = 0.5;
case 12:
            var2['speed'] = var9;
            var19 = var2;
            var18 = var8;
            var8 = copyDataProperties(var19, var18);
            var19 = var2;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var6 = 'source';
            var2[var6] = var7;
            var2 = var3.bind(var5)(var4, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();