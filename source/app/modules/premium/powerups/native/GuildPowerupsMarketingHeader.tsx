// app/modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PerkText(arg1) {
        var1 = arg1;
        var5 = var1.powerup;
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'color': 'always-white', 'variant': 'text-sm/semibold'};
        var5 = var5.title;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildPowerupType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['padding'] = var10;
    var10 = 7;
    var12 = var6[var10];
    var13 = var11.bind(var1)(var12);
    var12 = '#000000';
    var14 = var13.bind(var1)(var12);
    var13 = var14.alpha;
    var12 = 0.18;
    var13 = var13.bind(var14)(var12);
    var12 = var13.hex;
    var12 = var12.bind(var13)();
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var10 = var6[var10];
    var11 = var11.bind(var1)(var10);
    var10 = '#FFFFFF';
    var12 = var11.bind(var1)(var10);
    var11 = var12.alpha;
    var10 = 0.5;
    var11 = var11.bind(var12)(var10);
    var10 = var11.hex;
    var10 = var10.bind(var11)();
    var9['color'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsMarketingHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot8;
            var4 = undefined;
            var9 = var3.bind(var4)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getStateForGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var6 = var4 == var3;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 70; continue _fun0002 }
 41:
                    var3 = var3.powerupCatalog;
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 70; continue _fun0002 }
 56:
                    var2 = _closure1_slot6;
                    var2 = var2.PERK;
                    var1 = var3[var2];
 70:
                    return var1;
                }
            };
            var17 = var7.bind(var8)(var6, var3);
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var8 = var1.id;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot5;
                    var4 = var5.shouldFetchCatalogForGuild;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0003_ip = 75; continue _fun0003 }
 33:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchPowerupCatalogForGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot1;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var1.id;
            var1 = var2.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 175; continue _fun0001 }
 141:
            var1 = null;
            var3 = var1 == var17;
            var2 = undefined;
            if(var3) { _fun0001_ip = 157; continue _fun0001 }
 152:
            var2 = var17.length;
 157:
            var3 = var1 != var2;
            var16 = 0;
            var1 = 0;
            if(!var3) { _fun0001_ip = 171; continue _fun0001 }
 168:
            var1 = var2;
 171:
            if(!(var16 === var1)) { _fun0001_ip = 177; continue _fun0001 }
 175:
            return var4;
 177:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var9 = var9.text;
            var5['style'] = var9;
            var9 = 'text-sm/semibold';
            var5['variant'] = var9;
            var15 = 12;
            var9 = var8[var15];
            var9 = var10.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.format;
            var9 = _closure1_slot1;
            var20 = 13;
            var8 = var8[var20];
            var8 = var9.bind(var4)(var8);
            var9 = var8.7lwpzc;
            var8 = {};
            var12 = '';
            if(!(var4 !== var17)) { _fun0001_ip = 488; continue _fun0001 }
 303:
            var14 = var17.length;
            var24 = 1;
            if(!(var24 !== var14)) { _fun0001_ip = 463; continue _fun0001 }
 318:
            var18 = var17.length;
            var14 = 2;
            if(!(!(var18 > var14))) { _fun0001_ip = 335; continue _fun0001 }
 330:
            var23 = var17;
            _fun0001_ip = 345; continue _fun0001;
 335:
            var14 = var17.reverse;
            var23 = var14.bind(var17)();
 345:
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var15];
            var15 = var18.bind(var4)(var15);
            var19 = var15.intl;
            var18 = var19.format;
            var15 = _closure1_slot1;
            var14 = var14[var20];
            var14 = var15.bind(var4)(var14);
            var15 = var14.MNO3sL;
            var14 = {};
            var21 = _closure1_slot7;
            var22 = _closure1_slot9;
            var20 = {};
            var25 = var23[var16];
            var20['powerup'] = var25;
            var20 = var21.bind(var4)(var22, var20);
            var14['perk1'] = var20;
            var21 = _closure1_slot7;
            var20 = {};
            var23 = var23[var24];
            var20['powerup'] = var23;
            var20 = var21.bind(var4)(var22, var20);
            var14['perk2'] = var20;
            var12 = var18.bind(var19)(var15, var14);
            _fun0001_ip = 488; continue _fun0001;
 463:
            var15 = _closure1_slot7;
            var14 = _closure1_slot9;
            var13 = {};
            var16 = var17[var16];
            var13['powerup'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 488:
            var8['perks'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();