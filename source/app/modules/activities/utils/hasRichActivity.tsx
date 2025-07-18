// app/modules/activities/utils/hasRichActivity.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/hasRichActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function hasRichActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0001_ip = 34; continue _fun0001 }
 12:
            var5 = var3.type;
            var2 = _closure1_slot0;
            var2 = var2.CUSTOM_STATUS;
            var1 = var5 !== var2;
 34:
            if(!var1) { _fun0001_ip = 59; continue _fun0001 }
 37:
            var5 = var3.type;
            var2 = _closure1_slot0;
            var2 = var2.HANG_STATUS;
            var1 = var5 !== var2;
 59:
            if(!var1) { _fun0001_ip = 170; continue _fun0001 }
 62:
            var2 = var3.details;
            var2 = var4 != var2;
            if(var2) { _fun0001_ip = 129; continue _fun0001 }
 75:
            var5 = var3.assets;
            var5 = var4 != var5;
            if(!var5) { _fun0001_ip = 126; continue _fun0001 }
 88:
            var6 = var3.assets;
            var6 = var6.large_image;
            var6 = var4 != var6;
            if(var6) { _fun0001_ip = 123; continue _fun0001 }
 107:
            var7 = var3.assets;
            var7 = var7.small_text;
            var6 = var4 != var7;
 123:
            var5 = var6;
 126:
            var2 = var5;
 129:
            if(var2) { _fun0001_ip = 142; continue _fun0001 }
 132:
            var5 = var3.party;
            var2 = var4 != var5;
 142:
            if(var2) { _fun0001_ip = 155; continue _fun0001 }
 145:
            var5 = var3.secrets;
            var2 = var4 != var5;
 155:
            if(var2) { _fun0001_ip = 167; continue _fun0001 }
 158:
            var3 = var3.state;
            var2 = var4 != var3;
 167:
            var1 = var2;
 170:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();