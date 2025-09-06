// app/modules/directory_channels/native/components/GuildDirectoryRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var14 = 1;
    var4 = var6[var14];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.JoinGuildSources;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.Fragment;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = 'row';
    var15 = 16;
    var10 = {'flexDirection': 'row', 'padding': 16, 'marginVertical': 6, 'marginHorizontal': 8};
    var4['container'] = var10;
    var10 = {};
    var12 = 'column';
    var10['flexDirection'] = var12;
    var4['guildInfoContainer'] = var10;
    var10 = {};
    var12 = 9;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderRadius'] = var16;
    var10['marginRight'] = var15;
    var4['guildIcon'] = var10;
    var10 = {};
    var10['flex'] = var14;
    var4['guildWrapper'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    var4['guildCountsWrapper'] = var10;
    var10 = {};
    var15 = 'visible';
    var10['overflow'] = var15;
    var4['guildBadgeIcon'] = var10;
    var10 = {};
    var10['flex'] = var14;
    var4['guildName'] = var10;
    var10 = {'flexShrink': 1, 'marginBottom': 8};
    var4['guildDescription'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['memberInfo'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_360;
    var10['backgroundColor'] = var14;
    var4['dotOnline'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4, 'marginLeft': 16};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_400;
    var10['backgroundColor'] = var12;
    var4['dotOffline'] = var10;
    var10 = {'flexDirection': 'row', 'marginBottom': 4, 'justifyContent': 'space-between'};
    var4['headerContainer'] = var10;
    var10 = {};
    var10['flexDirection'] = var11;
    var4['titleContainer'] = var10;
    var10 = {'flex': 1, 'height': 4};
    var4['flex'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var24 = var2.entry;
            var _closure2_slot0 = var24;
            var2 = _closure1_slot13;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var27 = var24.name;
            var19 = var24.description;
            var39 = var24.approximateMemberCount;
            var38 = var24.approximatePresenceCount;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var2 = var3[var2];
            var7 = var5.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var5, var2);
            var10 = null;
            var14 = var10 != var2;
            var _closure2_slot1 = var14;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var20 = false;
            var6 = var2.bind(var5)(var20);
            var5 = _closure1_slot4;
            var2 = 2;
            var5 = var5.bind(var4)(var6, var2);
            var2 = 0;
            var15 = var5[var2];
            var2 = 1;
            var2 = var5[var2];
            var _closure2_slot2 = var2;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 10:
                            var5 = undefined;
                            var6 = undefined;
                            var4 = _closure2_slot2;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
 28: // try_start_0
                            var4 = _closure2_slot1;
                            if(var4) { _fun0002_ip = 274; continue _fun0002 }
 41:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 12;
                            var4 = var8[var4];
                            var9 = var7.bind(var5)(var4);
                            var8 = var9.joinGuild;
                            var4 = _closure2_slot0;
                            var7 = var4.guildId;
                            var4 = {};
                            var10 = _closure1_slot9;
                            var10 = var10.DIRECTORY_ENTRY;
                            var4['source'] = var10;
                            var4 = var8.bind(var9)(var7, var4);
                            SaveGenerator(address=102);
 100:
                            return var4;
 102:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 260; continue _fun0002 }
 111:
                            var9 = _closure1_slot7;
                            var8 = var9.getChannel;
                            var7 = _closure2_slot0;
                            var7 = var7.channelId;
                            var7 = var8.bind(var9)(var7);
                            var6 = var7;
                            var10 = null;
                            if(!(var10 != var7)) { _fun0002_ip = 246; continue _fun0002 }
 143:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var9 = var8.bind(var5)(var7);
                            var8 = var9.setHubProgressActionComplete;
                            var7 = var6;
                            var10 = var10 == var7;
                            var7 = undefined;
                            if(var10) { _fun0002_ip = 194; continue _fun0002 }
 181:
                            var10 = var6;
                            var6 = var10.getGuildId;
                            var7 = var6.bind(var10)();
 194:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 14;
                            var6 = var11[var6];
                            var6 = var10.bind(var5)(var6);
                            var6 = var6.HubProgressStep;
                            var6 = var6.JOIN_GUILD;
                            var6 = var8.bind(var9)(var7, var6);
 232: // try_end0
                            var7 = _closure2_slot2;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var5;
 246:
                            var7 = _closure2_slot2;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var5;
 260:
                            var7 = _closure2_slot2;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var4;
 274: // try_start_1
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.transitionToGuild;
                            var2 = _closure2_slot0;
                            var2 = var2.guildId;
                            var2 = var4.bind(var6)(var2);
 314: // try_end1
                            var6 = _closure2_slot2;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            var2 = undefined;
                            return var2;
 330: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot2;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 345:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var13 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var1 = 15;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getGuildIconURL;
            var1 = {};
            var5 = var24.guildId;
            var1['id'] = var5;
            var5 = var24.icon;
            var1['icon'] = var5;
            var5 = 40;
            var1['size'] = var5;
            var1 = var2.bind(var3)(var1);
            var2 = var10 != var1;
            var21 = undefined;
            if(!var2) { _fun0001_ip = 229; continue _fun0001 }
 226:
            var21 = var1;
 229:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var40 = 16;
            var2 = var1[var40];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var40];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.VJlc0d;
            var12 = var2.bind(var3)(var1);
            if(!var14) { _fun0001_ip = 341; continue _fun0001 }
 287:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var40];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var40];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.cqWE2d;
            var12 = var2.bind(var3)(var1);
 341:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 17;
            var1 = var22[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var5 = var17.container;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var17.guildWrapper;
            var5['style'] = var8;
            var8 = {};
            var11 = var17.headerContainer;
            var8['style'] = var11;
            var11 = {};
            var16 = var17.titleContainer;
            var11['style'] = var16;
            var18 = _closure1_slot1;
            var16 = 18;
            var16 = var22[var16];
            var18 = var18.bind(var4)(var16);
            var16 = {};
            var22 = var17.guildIcon;
            var16['style'] = var22;
            var16['icon'] = var21;
            var22 = var10 == var21;
            var21 = undefined;
            if(!var22) { _fun0001_ip = 498; continue _fun0001 }
 467:
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 19;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = var23.fromGuildDirectoryEntry;
            var21 = var22.bind(var23)(var24);
 498:
            var16['guild'] = var21;
            var16['selected'] = var20;
            var18 = var3.bind(var4)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var22 = _closure1_slot12;
            var21 = _closure1_slot6;
            var18 = {};
            var20 = var17.guildInfoContainer;
            var18['style'] = var20;
            var26 = _closure1_slot10;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 20;
            var23 = var23[var20];
            var23 = var25.bind(var4)(var23);
            var25 = var23.Text;
            var23 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var28 = var17.guildName;
            var23['style'] = var28;
            var23['children'] = var27;
            var25 = var26.bind(var4)(var25, var23);
            var23 = new Array(2);
            var23[0] = var25;
            var25 = {};
            var26 = var17.memberInfo;
            var25['style'] = var26;
            var26 = var10 != var38;
            var27 = null;
            if(!var26) { _fun0001_ip = 790; continue _fun0001 }
 638:
            var29 = _closure1_slot12;
            var28 = _closure1_slot11;
            var26 = {};
            var33 = _closure1_slot10;
            var31 = _closure1_slot6;
            var30 = {};
            var32 = var17.dotOnline;
            var30['style'] = var32;
            var31 = var33.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var31 = var34[var20];
            var31 = var35.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var36 = var34[var40];
            var36 = var35.bind(var4)(var36);
            var37 = var36.intl;
            var36 = var37.format;
            var34 = var34[var40];
            var34 = var35.bind(var4)(var34);
            var34 = var34.t;
            var35 = var34.LC+S+v;
            var34 = {};
            var34['membersOnline'] = var38;
            var34 = var36.bind(var37)(var35, var34);
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var30[1] = var31;
            var26['children'] = var30;
            var27 = var29.bind(var4)(var28, var26);
 790:
            var26 = new Array(2);
            var26[0] = var27;
            var28 = var10 != var39;
            var27 = null;
            if(!var28) { _fun0001_ip = 962; continue _fun0001 }
 810:
            var30 = _closure1_slot12;
            var29 = _closure1_slot11;
            var28 = {};
            var34 = _closure1_slot10;
            var32 = _closure1_slot6;
            var31 = {};
            var33 = var17.dotOffline;
            var31['style'] = var33;
            var32 = var34.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var32 = var35[var20];
            var32 = var36.bind(var4)(var32);
            var33 = var32.Text;
            var32 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var37 = var35[var40];
            var37 = var36.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.format;
            var35 = var35[var40];
            var35 = var36.bind(var4)(var35);
            var35 = var35.t;
            var36 = var35.zRl6XV;
            var35 = {};
            var35['count'] = var39;
            var35 = var37.bind(var38)(var36, var35);
            var32['children'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var31[1] = var32;
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
 962:
            var26[1] = var27;
            var25['children'] = var26;
            var25 = var22.bind(var4)(var21, var25);
            var23[1] = var25;
            var18['children'] = var23;
            var18 = var22.bind(var4)(var21, var18);
            var16[1] = var18;
            var11['children'] = var16;
            var16 = var7.bind(var4)(var6, var11);
            var11 = new Array(2);
            var11[0] = var16;
            var21 = _closure1_slot10;
            var18 = _closure1_slot6;
            var16 = {};
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 21;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['entry'] = var24;
            var22 = var21.bind(var4)(var23, var22);
            var16['children'] = var22;
            var16 = var21.bind(var4)(var18, var16);
            var11[1] = var16;
            var8['children'] = var11;
            var11 = var7.bind(var4)(var6, var8);
            var8 = new Array(4);
            var8[0] = var11;
            var10 = var10 != var19;
            if(!var10) { _fun0001_ip = 1102; continue _fun0001 }
 1094:
            var11 = '';
            var10 = var11 !== var19;
 1102:
            if(!var10) { _fun0001_ip = 1167; continue _fun0001 }
 1105:
            var18 = _closure1_slot10;
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var16.bind(var4)(var11);
            var16 = var11.Text;
            var11 = {'lineClamp': 3, 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var20 = var17.guildDescription;
            var11['style'] = var20;
            var11['children'] = var19;
            var10 = var18.bind(var4)(var16, var11);
 1167:
            var8[1] = var10;
            var11 = _closure1_slot10;
            var16 = _closure1_slot6;
            var10 = {};
            var17 = var17.flex;
            var10['style'] = var17;
            var10 = var11.bind(var4)(var16, var10);
            var8[2] = var10;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 22;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['loading'] = var15;
            var9['onPress'] = var13;
            var13 = 'active';
            if(!var14) { _fun0001_ip = 1248; continue _fun0001 }
 1244:
            var13 = 'secondary';
 1248:
            var9['variant'] = var13;
            var9['text'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectoryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();