// app/modules/activity_status/native/ActivityEmoji.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexShrink': 0, 'width': '100%', 'height': '100%'};
    var4['emoji'] = var9;
    var9 = {'textAlign': 'center', 'fontFamily': 'System'};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityEmoji.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.emoji;
            var _closure2_slot0 = var9;
            var11 = var2.size;
            var7 = var2.style;
            var4 = var2.withPlaceholder;
            var6 = undefined;
            if(!(var4 === var6)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var4 = false;
 39:
            var12 = var2.animate;
            if(!(var12 === var6)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var12 = true;
 51:
            var _closure2_slot1 = var6;
            var2 = _closure1_slot5;
            var8 = var2.bind(var6)();
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 3;
            var2 = var10[var2];
            var2 = var5.bind(var6)(var2);
            var5 = var2.AnimateEmoji;
            var2 = var5.useSetting;
            var13 = var2.bind(var5)();
            var2 = global;
            var10 = var2.Boolean;
            var2 = null;
            var14 = var2 == var9;
            var5 = undefined;
            if(var14) { _fun0001_ip = 127; continue _fun0001 }
 121:
            var5 = var9.animated;
 127:
            if(!var5) { _fun0001_ip = 133; continue _fun0001 }
 130:
            var5 = var13;
 133:
            if(!var5) { _fun0001_ip = 139; continue _fun0001 }
 136:
            var5 = var12;
 139:
            var13 = var10.bind(var6)(var5);
            _closure2_slot1 = var13;
            var12 = _closure1_slot3;
            var10 = var12.useMemo;
            var5 = var2 == var9;
            var14 = undefined;
            if(var5) { _fun0001_ip = 171; continue _fun0001 }
 166:
            var14 = var9.id;
 171:
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var13;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var1;
                    var3 = undefined;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var5 = _closure2_slot0;
                    var1 = var5.id;
 29:
                    if(!(var2 == var1)) { _fun0002_ip = 35; continue _fun0002 }
 33:
                    return var3;
 35:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.getEmojiURL;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['id'] = var5;
                    var5 = 48;
                    var1['size'] = var5;
                    var4 = _closure2_slot1;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var1, var5);
            if(!(var2 == var9)) { _fun0001_ip = 206; continue _fun0001 }
 198:
            var1 = null;
            if(!var4) { _fun0001_ip = 397; continue _fun0001 }
 206:
            if(!(var2 != var9)) { _fun0001_ip = 344; continue _fun0001 }
 213:
            var5 = _closure1_slot4;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 6;
            var2 = var12[var2];
            var4 = var4.bind(var6)(var2);
            var2 = {};
            var2['src'] = var10;
            var9 = var9.name;
            var2['name'] = var9;
            var9 = new Array(2);
            var9[0] = var7;
            var10 = {};
            var10['width'] = var11;
            var10['height'] = var11;
            var9[1] = var10;
            var2['style'] = var9;
            var10 = var8.emoji;
            var9 = new Array(3);
            var9[0] = var10;
            var10 = var8.text;
            var9[1] = var10;
            var10 = {};
            var10['fontSize'] = var11;
            var9[2] = var10;
            var2['textEmojiStyle'] = var9;
            var8 = var8.emoji;
            var2['fastImageStyle'] = var8;
            var8 = true;
            var2['adjustsFontSizeToFit'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0001_ip = 394; continue _fun0001;
 344:
            var5 = _closure1_slot4;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ReactionIcon;
            var3 = {};
            var3['style'] = var7;
            var7 = 'sm';
            var3['size'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 394:
            var1 = var2;
 397:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();