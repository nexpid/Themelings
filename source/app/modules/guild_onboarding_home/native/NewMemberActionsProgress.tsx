// app/modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ProgressBar(arg1) {
        var1 = arg1;
        var13 = var1.percent;
        var1 = _closure1_slot12;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var8.progressBackground;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 10;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var9 = var8.progressForeground;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = global;
        var10 = var10.HermesInternal;
        var12 = var10.concat;
        var11 = '';
        var10 = '%';
        var10 = var12.bind(var11)(var13, var10);
        var9['width'] = var10;
        var8[1] = var9;
        var5['style'] = var8;
        var8 = ['rgba(103, 203, 134, 1)', 'rgba(59, 165, 92, 1)'];
        var5['colors'] = var8;
        var8 = true;
        var5['useAngle'] = var8;
        var8 = -90;
        var5['angle'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 16;
    var9['padding'] = var11;
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['horizontal'] = var9;
    var9 = {};
    var11 = 'space-between';
    var9['justifyContent'] = var11;
    var4['spaceBetween'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['spaceBelow'] = var9;
    var9 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var9['height'] = var10;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var13;
    var4['progressBackground'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_POSITIVE_BACKGROUND;
    var9['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9['borderRadius'] = var11;
    var9['height'] = var10;
    var4['progressForeground'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewMemberActionsProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot12;
            var5 = undefined;
            var14 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var8 = var4[var2];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1, var8);
            var _closure2_slot1 = var1;
            var8 = var4[var2];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getCompletedActions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var10.bind(var11)(var9, var8);
            var _closure2_slot2 = var12;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getSelfMember;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var8)(var3, var2);
            var4 = null;
            var3 = var4 == var1;
            var8 = undefined;
            if(var3) { _fun0001_ip = 188; continue _fun0001 }
 183:
            var8 = var1.length;
 188:
            var9 = var4 != var8;
            var3 = 0;
            var11 = 0;
            if(!var9) { _fun0001_ip = 202; continue _fun0001 }
 199:
            var11 = var8;
 202:
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0002_ip = 56; continue _fun0002 }
 15:
                    var3 = _closure2_slot2;
                    if(!(var4 != var3)) { _fun0002_ip = 56; continue _fun0002 }
 23:
                    var3 = 0;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = _closure2_slot2;
                            var1 = arg1;
                            var1 = var1.channelId;
                            var2 = var2[var1];
                            var1 = null;
                            if(!(var1 != var2)) { _fun0003_ip = 39; continue _fun0003 }
 25:
                            var1 = _closure3_slot0;
                            var1 = var1 + 1;
                            _closure3_slot0 = var1;
 39:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure3_slot0;
                    return var1;
 56:
                    var1 = 0;
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var1, var8);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var9 = var8.bind(var5)(var1);
            var8 = var9.hasFlag;
            var12 = var4 == var2;
            var1 = undefined;
            if(var12) { _fun0001_ip = 276; continue _fun0001 }
 271:
            var1 = var2.flags;
 276:
            var12 = var4 != var1;
            var2 = 0;
            if(!var12) { _fun0001_ip = 288; continue _fun0001 }
 285:
            var2 = var1;
 288:
            var1 = _closure1_slot9;
            var1 = var1.COMPLETED_HOME_ACTIONS;
            var2 = var8.bind(var9)(var2, var1);
            var1 = null;
            if(var2) { _fun0001_ip = 854; continue _fun0001 }
 312:
            var1 = null;
            if(!(var3 !== var11)) { _fun0001_ip = 854; continue _fun0001 }
 321:
            var2 = var10 + var11;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 854; continue _fun0001 }
 334:
            var4 = _closure1_slot11;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 13;
            var2 = var20[var2];
            var2 = var16.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {'accessibilityRole': 'button', 'activeOpacity': 0.4};
            var8 = var14.container;
            var2['style'] = var8;
            var6 = function onPress() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var2 = _closure1_slot8;
                var2 = var2.GUILD_HOME;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot4;
            var6 = {};
            var12 = var14.horizontal;
            var9 = new Array(3);
            var9[0] = var12;
            var12 = var14.spaceBetween;
            var9[1] = var12;
            var12 = var14.spaceBelow;
            var9[2] = var12;
            var6['style'] = var9;
            var13 = _closure1_slot10;
            var15 = 15;
            var9 = var20[var15];
            var9 = var16.bind(var5)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'text-xs/bold', 'color': 'header-primary'};
            var17 = 16;
            var18 = var20[var17];
            var18 = var16.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var20[var17];
            var17 = var16.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.LhlgY2;
            var17 = var18.bind(var19)(var17);
            var9['children'] = var17;
            var12 = var13.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var13 = _closure1_slot4;
            var12 = {};
            var14 = var14.horizontal;
            var12['style'] = var14;
            var18 = _closure1_slot10;
            var14 = var20[var15];
            var14 = var16.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'text-xs/bold', 'color': 'header-primary'};
            var14['children'] = var10;
            var17 = var18.bind(var5)(var17, var14);
            var14 = new Array(4);
            var14[0] = var17;
            var19 = _closure1_slot10;
            var17 = var20[var15];
            var17 = var16.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'children': '/'};
            var17 = var19.bind(var5)(var18, var17);
            var14[1] = var17;
            var17 = _closure1_slot10;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-xs/bold', 'color': 'header-primary'};
            var15['children'] = var11;
            var15 = var17.bind(var5)(var16, var15);
            var14[2] = var15;
            var17 = _closure1_slot10;
            var19 = _closure1_slot1;
            var18 = 17;
            var15 = var20[var18];
            var16 = var19.bind(var5)(var15);
            var15 = {};
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.Sizes;
            var18 = var18.REFRESH_SMALL_16;
            var15['size'] = var18;
            var18 = 18;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var15['source'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[3] = var15;
            var12['children'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var9[1] = var12;
            var6['children'] = var9;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot13;
            var7 = {};
            var11 = var10 / var11;
            var10 = 100;
            var11 = var11 * var10;
            var10 = 3;
            var10 = var11 + var10;
            var7['percent'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 854:
            return var1;
        }
    };
    var3['NewMemberActionsProgress'] = var2;
    return var1;
})();