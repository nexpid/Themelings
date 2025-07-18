// app/modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BurstReactionAnimationPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.channelId;
            var6 = var1.emoji;
            var7 = var1.messageId;
            var4 = var1.reactionType;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.ReactionTypes;
            var3 = var1.BURST;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 120; continue _fun0001 }
 68:
            var4 = _closure1_slot3;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 3;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = true;
            var2['isFullscreen'] = var9;
            var2['channelId'] = var8;
            var2['messageId'] = var7;
            var2['emoji'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 120:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();