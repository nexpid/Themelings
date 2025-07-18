// app/modules/polls/useVoteReactors.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_NUM_REACTION_USERS;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/useVoteReactors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoteReactors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.channelId;
            var _closure2_slot0 = var11;
            var9 = var2.messageId;
            var _closure2_slot1 = var9;
            var3 = var2.reaction;
            var _closure2_slot2 = var3;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 2;
            var5 = var10[var4];
            var4 = undefined;
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var9;
            var9 = var3.emoji;
            var5[2] = var9;
            var9 = _closure1_slot1;
            var2 = 4;
            var2 = var10[var2];
            var12 = var9.bind(var4)(var2);
            var14 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var8 = _closure1_slot3;
                    var7 = var8.getReactions;
                    var6 = _closure2_slot0;
                    var13 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var12 = var2.emoji;
                    var11 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.ReactionTypes;
                    var10 = var2.VOTE;
                    var15 = var8;
                    var14 = var6;
                    var6 = var15[var7](var14, var13, var12, var11, var10, var9);
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var4 = null;
                    var5 = var4 == var6;
                    if(var5) { _fun0002_ip = 113; continue _fun0002 }
 104:
                    var5 = var6.values;
                    var1 = var5.bind(var6)();
 113:
                    if(!(var4 == var1)) { _fun0002_ip = 121; continue _fun0002 }
 117:
                    var1 = new Array(0);
 121:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var8;
            var15 = var6;
            var13 = var5;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            var1 = {};
            var1['reactors'] = var2;
            var5 = var3.count_details;
            var3 = null;
            var6 = var3 == var5;
            if(var6) { _fun0001_ip = 161; continue _fun0001 }
 155:
            var4 = var5.vote;
 161:
            var5 = var3 != var4;
            var3 = 0;
            if(!var5) { _fun0001_ip = 173; continue _fun0001 }
 170:
            var3 = var4;
 173:
            var2 = var2.length;
            var2 = var3 > var2;
            var1['hasMore'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();