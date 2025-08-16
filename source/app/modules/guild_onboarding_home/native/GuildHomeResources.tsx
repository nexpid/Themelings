// app/modules/guild_onboarding_home/native/GuildHomeResources.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function ResourceChannelRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var20 = var1.channelId;
            var _closure2_slot0 = var20;
            var25 = var1.title;
            var10 = var1.icon;
            var29 = var1.description;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot14;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var2 = var1[var6];
            var12 = var3.bind(var5)(var2);
            var8 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var8.bind(var12)(var7, var2);
            var _closure2_slot1 = var19;
            var2 = var1[var6];
            var12 = var3.bind(var5)(var2);
            var8 = var12.useStateFromStores;
            var2 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.VIEW_CHANNEL;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var8.bind(var12)(var7, var2);
            var6 = var1[var6];
            var12 = var3.bind(var5)(var6);
            var8 = var12.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var12)(var7, var6);
            var6 = var7.first;
            var13 = var6.bind(var7)();
            var15 = 11;
            var6 = var1[var15];
            var12 = var3.bind(var5)(var6);
            var6 = var12.useForumPostMediaProperties;
            var8 = false;
            var6 = var6.bind(var12)(var13, var8);
            var1 = var1[var15];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useFirstMediaIsEmbed;
            var17 = var1.bind(var3)(var13, var8);
            var1 = null;
            var3 = var1 == var6;
            var8 = undefined;
            if(var3) { _fun0001_ip = 251; continue _fun0001 }
 246:
            var8 = var6.length;
 251:
            var3 = 0;
            var8 = var8 > var3;
            var18 = null;
            if(!var8) { _fun0001_ip = 266; continue _fun0001 }
 262:
            var18 = var6[var3];
 266:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 12;
            var6 = var14[var8];
            var16 = var12.bind(var5)(var6);
            var12 = var16.useSharedMediaProps;
            var6 = {};
            var6['channel'] = var19;
            var6['media'] = var18;
            var6 = var12.bind(var16)(var6);
            var16 = var6.shouldObscure;
            var12 = _closure1_slot1;
            var6 = 13;
            var6 = var14[var6];
            var6 = var12.bind(var5)(var6);
            var32 = var6.bind(var5)(var13);
            var6 = var1 != var19;
            if(!var6) { _fun0001_ip = 356; continue _fun0001 }
 342:
            var12 = var7.first;
            var12 = var12.bind(var7)();
            var6 = var1 == var12;
 356:
            if(!var6) { _fun0001_ip = 368; continue _fun0001 }
 359:
            var12 = var7.loadingMore;
            var6 = !var12;
 368:
            if(!var6) { _fun0001_ip = 380; continue _fun0001 }
 371:
            var12 = var7.ready;
            var6 = !var12;
 380:
            if(!var6) { _fun0001_ip = 392; continue _fun0001 }
 383:
            var7 = var7.hasFetched;
            var6 = !var7;
 392:
            _closure2_slot2 = var6;
            var14 = _closure1_slot3;
            var12 = var14.useEffect;
            var7 = new Array(2);
            var7[0] = var20;
            var7[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0002_ip = 68; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchMessages;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['channelId'] = var4;
                    var1['after'] = var4;
                    var4 = 5;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var12.bind(var14)(var6, var7);
            var12 = _closure1_slot3;
            var7 = var12.useCallback;
            var6 = new Array(1);
            var6[0] = var19;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 64; continue _fun0003 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectHomeResourceChannel;
                    var1 = _closure2_slot1;
                    var2 = var1.guild_id;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var7.bind(var12)(var4, var6);
            if(!(var1 != var19)) { _fun0001_ip = 1164; continue _fun0001 }
 467:
            if(!var2) { _fun0001_ip = 1164; continue _fun0001 }
 473:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var7 = var4.bind(var5)(var2);
            var4 = var7.getResourceChannelIconURL;
            var2 = {};
            var12 = var19.id;
            var2['channelId'] = var12;
            var2['icon'] = var10;
            var7 = var4.bind(var7)(var2);
            var23 = var1 == var29;
            if(var23) { _fun0001_ip = 535; continue _fun0001 }
 526:
            var2 = var29.length;
            var23 = var3 === var2;
 535:
            var4 = _closure1_slot13;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 17;
            var2 = var20[var2];
            var2 = var21.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['onPress'] = var6;
            var6 = var11.channelContainer;
            var2['style'] = var6;
            var14 = _closure1_slot13;
            var12 = _closure1_slot4;
            var6 = {};
            var22 = var11.textContent;
            var6['style'] = var22;
            var24 = _closure1_slot12;
            var22 = 18;
            var20 = var20[var22];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            var20['children'] = var25;
            var21 = var24.bind(var5)(var21, var20);
            var20 = new Array(3);
            var20[0] = var21;
            var21 = var23;
            if(!var21) { _fun0001_ip = 664; continue _fun0001 }
 660:
            var21 = var1 != var32;
 664:
            if(!var21) { _fun0001_ip = 780; continue _fun0001 }
 667:
            var26 = _closure1_slot12;
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = var30[var22];
            var24 = var25.bind(var5)(var24);
            var25 = var24.Text;
            var24 = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            var27 = var11.messageContent;
            var24['style'] = var27;
            var28 = _closure1_slot1;
            var27 = 19;
            var27 = var30[var27];
            var31 = var28.bind(var5)(var27);
            var30 = var31.parse;
            var28 = {};
            var27 = var19.guild_id;
            var28['guildId'] = var27;
            var27 = var19.id;
            var28['channelId'] = var27;
            var27 = true;
            var27 = var30.bind(var31)(var32, var27, var28);
            var24['children'] = var27;
            var21 = var26.bind(var5)(var25, var24);
 780:
            var20[1] = var21;
            var21 = !var23;
            if(var23) { _fun0001_ip = 903; continue _fun0001 }
 790:
            var24 = _closure1_slot12;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = var27[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            var25 = var11.messageContent;
            var22['style'] = var25;
            var26 = _closure1_slot1;
            var25 = 19;
            var25 = var27[var25];
            var28 = var26.bind(var5)(var25);
            var27 = var28.parse;
            var26 = {};
            var25 = var19.guild_id;
            var26['guildId'] = var25;
            var25 = var19.id;
            var26['channelId'] = var25;
            var25 = true;
            var25 = var27.bind(var28)(var29, var25, var26);
            var22['children'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 903:
            var20[2] = var21;
            var6['children'] = var20;
            var12 = var14.bind(var5)(var12, var6);
            var6 = new Array(3);
            var6[0] = var12;
            var12 = var1 != var10;
            var10 = null;
            if(!var12) { _fun0001_ip = 978; continue _fun0001 }
 934:
            var12 = var1 != var7;
            var10 = null;
            if(!var12) { _fun0001_ip = 978; continue _fun0001 }
 943:
            var20 = _closure1_slot12;
            var14 = _closure1_slot5;
            var12 = {};
            var21 = {};
            var21['uri'] = var7;
            var12['source'] = var21;
            var21 = var11.icon;
            var12['style'] = var21;
            var10 = var20.bind(var5)(var14, var12);
 978:
            var6[1] = var10;
            var10 = var1 != var7;
            var7 = null;
            if(var10) { _fun0001_ip = 1148; continue _fun0001 }
 994:
            var10 = var1 == var13;
            var7 = null;
            if(var10) { _fun0001_ip = 1148; continue _fun0001 }
 1006:
            if(!(var1 != var13)) { _fun0001_ip = 1024; continue _fun0001 }
 1010:
            var10 = var13.blocked;
            var7 = null;
            if(var10) { _fun0001_ip = 1148; continue _fun0001 }
 1024:
            var10 = var1 == var18;
            var7 = null;
            if(var10) { _fun0001_ip = 1148; continue _fun0001 }
 1033:
            var10 = _closure1_slot12;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = var12[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.ForumPostMediaThumbnail;
            var8 = {};
            var8['channel'] = var19;
            var8['media'] = var18;
            var8['isEmbed'] = var17;
            var12 = var12[var15];
            var15 = var14.bind(var5)(var12);
            var14 = var15.getEmbedColor;
            var12 = var1 != var16;
            if(!var12) { _fun0001_ip = 1101; continue _fun0001 }
 1098:
            var12 = var16;
 1101:
            var12 = var14.bind(var15)(var13, var12);
            var8['embedLeftBorderColor'] = var12;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 1126; continue _fun0001 }
 1121:
            var12 = var13.id;
 1126:
            var8['firstMessageId'] = var12;
            var11 = var11.thumbnail;
            var8['containerStyle'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1148:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1164:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot10 = var7;
    var4 = var4.Routes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 12, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'padding': 20, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    var4['emptyStateContainer'] = var9;
    var9 = {'backgroundColor': null, 'marginBottom': 8, 'padding': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-start'};
    var12 = 9;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['channelContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['messageContent'] = var9;
    var9 = {};
    var9['flex'] = var11;
    var4['textContent'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['thumbnail'] = var9;
    var9 = {'marginTop': 12, 'marginBottom': 20};
    var4['emptyStateImage'] = var9;
    var9 = {'width': 72, 'height': 72};
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/GuildHomeResources.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildHomeResources(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot14;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var9 = var1.bind(var5)(var2);
            var2 = var9.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 114; continue _fun0004 }
 63:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var8.container;
            var1['style'] = var4;
            var6 = var9.map;
            var4 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var4 = _closure1_slot15;
                var3 = {};
                var2 = var1.channelId;
                var3['channelId'] = var2;
                var2 = var1.title;
                var3['title'] = var2;
                var2 = var1.icon;
                var3['icon'] = var2;
                var2 = var1.description;
                var3['description'] = var2;
                var6 = var1.channelId;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'resource-';
                var2 = var2.bind(var1)(var6);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var4 = var6.bind(var9)(var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0004_ip = 393; continue _fun0004;
 114:
            var4 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.emptyStateContainer;
            var2['style'] = var6;
            var12 = _closure1_slot12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 18;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var10 = 22;
            var15 = var14[var10];
            var15 = var13.bind(var5)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var14[var10];
            var15 = var13.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.owvC9f;
            var15 = var16.bind(var17)(var15);
            var6['children'] = var15;
            var9 = var12.bind(var5)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var15 = _closure1_slot12;
            var12 = _closure1_slot5;
            var9 = {};
            var8 = var8.emptyStateImage;
            var9['style'] = var8;
            var8 = _closure1_slot1;
            var16 = 23;
            var16 = var14[var16];
            var16 = var8.bind(var5)(var16);
            var9['source'] = var16;
            var9 = var15.bind(var5)(var12, var9);
            var6[1] = var9;
            var9 = _closure1_slot12;
            var7 = 24;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var11 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getDefaultChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 != var1)) { _fun0005_ip = 89; continue _fun0005 }
 31:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot11;
                    var5 = var6.CHANNEL;
                    var4 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.3iCBUl;
            var10 = var11.bind(var12)(var10);
            var7['text'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 393:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();