// app/modules/video_calls/native/useIsFiveButtonLayout.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useIsFiveButtonLayout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 2;
            var1 = var6[var11];
            var8 = undefined;
            var10 = var5.bind(var8)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var7, var1);
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var8)(var1);
            var1 = var5.useIsConnectedToVoiceChannel;
            var1 = var1.bind(var5)(var10);
            var6 = null;
            var7 = var6 == var10;
            var5 = undefined;
            if(var7) { _fun0001_ip = 101; continue _fun0001 }
 96:
            var5 = var10.guild_id;
 101:
            var7 = var6 != var5;
            var13 = null;
            if(!var7) { _fun0001_ip = 113; continue _fun0001 }
 110:
            var13 = var5;
 113:
            var _closure2_slot1 = var13;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var9 = var7.bind(var8)(var5);
            var7 = var6 == var10;
            var5 = undefined;
            if(var7) { _fun0001_ip = 151; continue _fun0001 }
 146:
            var5 = var10.guild_id;
 151:
            var12 = var6 != var5;
            var7 = null;
            if(!var12) { _fun0001_ip = 163; continue _fun0001 }
 160:
            var7 = var5;
 163:
            var12 = var6 == var10;
            var5 = undefined;
            if(var12) { _fun0001_ip = 177; continue _fun0001 }
 172:
            var5 = var10.id;
 177:
            var7 = var9.bind(var8)(var7, var5);
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var9.bind(var8)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = new Array(1);
            var5[0] = var13;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var11.bind(var12)(var9, var2, var5);
            var9 = var6 == var5;
            var2 = undefined;
            if(var9) { _fun0001_ip = 252; continue _fun0001 }
 246:
            var2 = var5.afkChannelId;
 252:
            var5 = var6 == var10;
            var9 = undefined;
            if(var5) { _fun0001_ip = 271; continue _fun0001 }
 261:
            var5 = var10.isGuildVoice;
            var9 = var5.bind(var10)();
 271:
            var5 = var6 != var9;
            if(!var5) { _fun0001_ip = 281; continue _fun0001 }
 278:
            var5 = var9;
 281:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 5;
            var9 = var12[var9];
            var9 = var11.bind(var8)(var9);
            var11 = var6 == var10;
            var6 = undefined;
            if(var11) { _fun0001_ip = 315; continue _fun0001 }
 310:
            var6 = var10.id;
 315:
            var6 = var9.bind(var8)(var6);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 6;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.bind(var8)();
            if(!var1) { _fun0001_ip = 350; continue _fun0001 }
 347:
            var1 = var7;
 350:
            if(!var1) { _fun0001_ip = 362; continue _fun0001 }
 353:
            if(var5) { _fun0001_ip = 359; continue _fun0001 }
 356:
            var5 = var6;
 359:
            var1 = var5;
 362:
            if(!var1) { _fun0001_ip = 368; continue _fun0001 }
 365:
            var1 = !var4;
 368:
            if(!var1) { _fun0001_ip = 378; continue _fun0001 }
 371:
            var2 = var2 === var3;
            var1 = !var2;
 378:
            return var1;
        }
    };
    var3['useIsFiveButtonLayout'] = var2;
    return var1;
})();