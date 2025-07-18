// app/modules/go_live/utils/getSoundshareAnalyticsContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/getSoundshareAnalyticsContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSoundshareAnalyticsContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = null;
            if(!(var7 != var4)) { _fun0001_ip = 103; continue _fun0001 }
 9:
            var8 = var4.sourcePid;
            var5 = var7 != var8;
            var3 = undefined;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 78; continue _fun0001 }
 26:
            var6 = _closure1_slot0;
            var5 = var6.getGameForPID;
            var6 = var5.bind(var6)(var8);
            var8 = var7 == var6;
            var5 = undefined;
            if(var8) { _fun0001_ip = 58; continue _fun0001 }
 53:
            var5 = var6.name;
 58:
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 72; continue _fun0001 }
 67:
            var1 = var6.id;
 72:
            var2 = var1;
            var3 = var5;
 78:
            var1 = {};
            var4 = var4.soundshareSession;
            var1['soundshare_session'] = var4;
            var1['share_game_name'] = var3;
            var1['share_game_id'] = var2;
            return var1;
 103:
            var1 = {};
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();