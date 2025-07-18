// app/modules/icymi/native/ItemDetailsActionSheet.tsx
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['height'] = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ItemDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ItemDetailsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.channelId;
            var _closure2_slot1 = var3;
            var2 = var2.id;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 8;
            var5 = var3[var6];
            var4 = undefined;
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var8, var5);
            var5 = var3[var6];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var8, var5);
            var5 = _closure1_slot1;
            var8 = 9;
            var8 = var3[var8];
            var9 = var5.bind(var4)(var8);
            var8 = true;
            var11 = var9.bind(var4)(var13, var8);
            var6 = var3[var6];
            var9 = var2.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 40; continue _fun0002 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getDehydratedItem;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var6, var1);
            var1 = 10;
            var1 = var3[var1];
            var5 = var5.bind(var4)(var1);
            var1 = 'show_icymi_debug_scores';
            var8 = var5.bind(var4)(var1);
            var1 = 11;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useICYMIForumThreadsEnabled;
            var1 = 'itemDetailsActionSheet';
            var3 = var2.bind(var3)(var1);
            var9 = null;
            if(!(var9 == var18)) { _fun0001_ip = 326; continue _fun0001 }
 247:
            var1 = var9 != var13;
            var14 = undefined;
            if(!var1) { _fun0001_ip = 391; continue _fun0001 }
 259:
            var5 = _closure1_slot7;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 13;
            var1 = var15[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = _closure1_slot0;
            var6 = var15[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.LARGE;
            var1['size'] = var6;
            var1['channel'] = var13;
            var14 = var5.bind(var4)(var2, var1);
            _fun0001_ip = 391; continue _fun0001;
 326:
            var5 = _closure1_slot7;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 12;
            var1 = var15[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var18;
            var10 = _closure1_slot0;
            var6 = var15[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.GuildIconSizes;
            var6 = var6.LARGE;
            var1['size'] = var6;
            var14 = var5.bind(var4)(var2, var1);
 391:
            var1 = _closure1_slot10;
            var19 = var1.bind(var4)();
            var15 = var9 != var13;
            if(!var15) { _fun0001_ip = 410; continue _fun0001 }
 406:
            var15 = var9 != var18;
 410:
            if(!var15) { _fun0001_ip = 445; continue _fun0001 }
 413:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isChannelCustomScoreEligible;
            var15 = var1.bind(var2)(var13, var3);
 445:
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'showGradient': true, 'startExpanded': true};
            var10 = _closure1_slot7;
            var5 = 16;
            var5 = var16[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ActionSheetIconHeader;
            var5 = {};
            var5['icon'] = var14;
            var5['title'] = var11;
            var11 = var9 == var18;
            var14 = undefined;
            if(var11) { _fun0001_ip = 535; continue _fun0001 }
 530:
            var14 = var18.name;
 535:
            var16 = var9 != var14;
            var11 = '';
            if(!var16) { _fun0001_ip = 549; continue _fun0001 }
 546:
            var11 = var14;
 549:
            var5['subtitle'] = var11;
            var5 = var10.bind(var4)(var6, var5);
            var1['header'] = var5;
            var6 = var15;
            if(!var15) { _fun0001_ip = 616; continue _fun0001 }
 570:
            var11 = _closure1_slot7;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 17;
            var5 = var14[var5];
            var5 = var10.bind(var4)(var5);
            var10 = var5.ChannelScoreSettings;
            var5 = {};
            var5['channel'] = var13;
            var5['guild'] = var18;
            var6 = var11.bind(var4)(var10, var5);
 616:
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var9 != var12;
            if(!var6) { _fun0001_ip = 635; continue _fun0001 }
 631:
            var6 = var9 != var18;
 635:
            if(!var6) { _fun0001_ip = 741; continue _fun0001 }
 638:
            var13 = _closure1_slot9;
            var11 = _closure1_slot8;
            var10 = {};
            if(!var15) { _fun0001_ip = 677; continue _fun0001 }
 651:
            var17 = _closure1_slot7;
            var16 = _closure1_slot3;
            var14 = {};
            var19 = var19.divider;
            var14['style'] = var19;
            var15 = var17.bind(var4)(var16, var14);
 677:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 17;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.GuildScoreSettings;
            var15 = {};
            var15['guild'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var10['children'] = var14;
            var6 = var13.bind(var4)(var11, var10);
 741:
            var5[1] = var6;
            var10 = var9 != var12;
            var6 = null;
            if(!var10) { _fun0001_ip = 893; continue _fun0001 }
 757:
            var6 = null;
            if(!var8) { _fun0001_ip = 893; continue _fun0001 }
 765:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 18;
            var7 = var13[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var10 = 'Debug details';
            var7['title'] = var10;
            var10 = 19;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var14 = var12.score;
            var13 = 'Total Score: ';
            var13 = var13 + var14;
            var10['label'] = var13;
            var13 = global;
            var14 = var13.JSON;
            var13 = var14.stringify;
            var12 = var12.score_components;
            var12 = var13.bind(var14)(var12);
            var10['subLabel'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 893:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();