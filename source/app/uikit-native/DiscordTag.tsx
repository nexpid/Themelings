// app/uikit-native/DiscordTag.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexGrow': 1, 'alignItems': 'center', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginLeft'] = var10;
    var4['botTag'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/DiscordTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DiscordTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.user;
            var14 = var1.nick;
            var16 = var1.usernameStyle;
            var15 = var1.nicknameStyle;
            var21 = var1.discriminatorStyle;
            var8 = var1.hideBotTag;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var8 = false;
 46:
            var1 = _closure1_slot6;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var9 = null;
            if(!(var9 == var14)) { _fun0001_ip = 269; continue _fun0001 }
 85:
            var5 = var9 != var11;
            var6 = null;
            if(!var5) { _fun0001_ip = 267; continue _fun0001 }
 97:
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var22 = 5;
            var5 = var5[var22];
            var5 = var12.bind(var4)(var5);
            var12 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            var5['style'] = var16;
            var16 = var11.toString;
            var17 = var16.bind(var11)();
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var11.isPomelo;
            var17 = var17.bind(var11)();
            var17 = !var17;
            if(!var17) { _fun0001_ip = 253; continue _fun0001 }
 179:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var22];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-md/semibold', 'color': 'text-muted'};
            var18['style'] = var21;
            var22 = var11.discriminator;
            var21 = ['#'];
            var21[1] = var22;
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
 253:
            var16[1] = var17;
            var5['children'] = var16;
            var6 = var13.bind(var4)(var12, var5);
 267:
            _fun0001_ip = 328; continue _fun0001;
 269:
            var13 = _closure1_slot4;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 5;
            var5 = var16[var5];
            var5 = var12.bind(var4)(var5);
            var12 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'maxFontSizeMultiplier': 2, 'style': null, 'lineClamp': 1};
            var5['style'] = var15;
            var5['children'] = var14;
            var6 = var13.bind(var4)(var12, var5);
 328:
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var9 == var11;
            var13 = undefined;
            if(var6) { _fun0001_ip = 351; continue _fun0001 }
 345:
            var13 = var11.bot;
 351:
            var12 = true;
            var6 = null;
            if(!(var12 === var13)) { _fun0001_ip = 421; continue _fun0001 }
 359:
            var6 = null;
            if(var8) { _fun0001_ip = 421; continue _fun0001 }
 364:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 6;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.botTag;
            var7['style'] = var10;
            var10 = var11.isVerifiedBot;
            var10 = var10.bind(var11)();
            var7['verified'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 421:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();