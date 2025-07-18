// app/modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var1 = var8.length;
            var6 = 1;
            var5 = var1 - var6;
            var3 = global;
            var2 = 2;
            var4 = 0;
            if(!(var4 <= var5)) { _fun0001_ip = 105; continue _fun0001 }
 29:
            var10 = var3.Math;
            var9 = var10.floor;
            var1 = var4 + var5;
            var1 = var1 / var2;
            var10 = var9.bind(var10)(var1);
            var1 = var8[var10];
            var9 = var1.start;
            if(!(var7 >= var9)) { _fun0001_ip = 76; continue _fun0001 }
 67:
            var9 = var1.end;
            if(!(!(var7 <= var9))) { _fun0001_ip = 109; continue _fun0001 }
 76:
            var9 = var1.start;
            if(!(!(var7 < var9))) { _fun0001_ip = 91; continue _fun0001 }
 85:
            var9 = var10 + var6;
            _fun0001_ip = 98; continue _fun0001;
 91:
            var5 = var10 - var6;
            var9 = var4;
 98:
            var4 = var9;
            if(var4 <= var5) { _fun0001_ip = 29; continue _fun0001 }
 105:
            var2 = null;
            return var2;
 109:
            return var1;
        }
    };
    var3['findActiveCaption'] = var2;
    return var1;
})();