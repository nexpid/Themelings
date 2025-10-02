// app/modules/create_guild/native/components/GuildInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function SeeMoreFooter(arg1) {
        var1 = arg1;
        var5 = var1.openInviteSheet;
        var1 = _closure1_slot21;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot19;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 15;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var10 = _closure1_slot19;
        var7 = _closure1_slot6;
        var6 = {};
        var12 = var12.friendIcon;
        var6['style'] = var12;
        var13 = _closure1_slot19;
        var11 = 16;
        var11 = var9[var11];
        var11 = var8.bind(var4)(var11);
        var12 = var11.GroupIcon;
        var11 = {};
        var14 = 'sm';
        var11['size'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var6['children'] = var11;
        var6 = var10.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var1['onPress'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.zrLIIy;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var5 = true;
        var1['end'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function GuildInviteSuggestionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.invite;
            var _closure2_slot0 = var2;
            var12 = var1.suggestions;
            var _closure2_slot1 = var12;
            var14 = var1.openInviteSheet;
            var1 = _closure1_slot21;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var4 = _closure2_slot1;
                var3 = var4.slice;
                var2 = 0;
                var1 = 6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var3.bind(var4)(var1, var2);
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot19;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var13.suggestionsContainer;
            var2['style'] = var6;
            var8 = _closure1_slot19;
            var7 = _closure1_slot7;
            var6 = {};
            var6['data'] = var15;
            var15 = function renderItem(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var6 = var1.index;
                var4 = _closure1_slot19;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['row'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.code;
                var1['code'] = var5;
                var5 = 0;
                var5 = var5 === var6;
                var1['start'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderItem'] = var15;
            var13 = var13.suggestionRowsContainer;
            var6['contentContainerStyle'] = var13;
            var13 = var12.length;
            var12 = 6;
            var12 = var13 > var12;
            var10 = null;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot19;
            var12 = _closure1_slot22;
            var11 = {};
            var11['openInviteSheet'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 4:
            var6['ListFooterComponent'] = var10;
            var10 = function ItemSeparatorComponent() {
                var4 = _closure1_slot19;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormDivider;
                var1 = {};
                var5 = true;
                var1['iconPush'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['ItemSeparatorComponent'] = var10;
            var9 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var1 = var1.id;
                return var1;
            };
            var6['keyExtractor'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.FlatList;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useInstantInviteSendStates;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CreateGuildModalStates;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot15 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot16 = var7;
    var7 = var4.Permissions;
    var _closure1_slot17 = var7;
    var4 = var4.SearchTypes;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot19 = var7;
    var4 = var4.jsxs;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var13 = var6[var10];
    var13 = var5.bind(var1)(var13);
    var13 = var13.NAV_BAR_HEIGHT;
    var9['marginTop'] = var13;
    var9['flex'] = var11;
    var11 = 13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var13;
    var13 = 'center';
    var9['alignItems'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['marginBottom'] = var14;
    var4['header'] = var9;
    var13 = 16;
    var9 = {'lineHeight': 18, 'marginBottom': 8, 'paddingHorizontal': 16, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {};
    var9['marginVertical'] = var13;
    var4['headerImage'] = var9;
    var9 = {'paddingHorizontal': 16, 'width': '100%'};
    var4['linkContainer'] = var9;
    var9 = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'padding': 12, 'justifyContent': 'space-between'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var9['borderRadius'] = var15;
    var4['linkButton'] = var9;
    var9 = {};
    var9['marginLeft'] = var13;
    var4['searchButton'] = var9;
    var9 = {};
    var9['marginLeft'] = var14;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_NORMAL;
    var9['tintColor'] = var15;
    var4['linkButtonIcon'] = var9;
    var9 = {};
    var9['marginTop'] = var14;
    var4['inviteDetail'] = var9;
    var9 = {};
    var9['marginVertical'] = var13;
    var4['shareButton'] = var9;
    var9 = {'width': '100%', 'flex': 1, 'alignContent': 'flex-start'};
    var4['suggestionsContainer'] = var9;
    var9 = {'backgroundColor': null, 'height': 32, 'width': 32, 'padding': 8, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xxl;
    var9['borderRadius'] = var11;
    var4['friendIcon'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var10;
    var4['suggestionRowsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/components/GuildInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildInvite(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.closeOnEditInviteLink;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = true;
case 6:
            var _closure2_slot0 = var2;
            var11 = var1.onClose;
            var _closure2_slot1 = var11;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot21;
            var16 = var1.bind(var5)();
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var2 = var9.bind(var5)(var1);
            var1 = var2.useNavigation;
            var12 = var1.bind(var2)();
            _closure2_slot2 = var12;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = false;
            var2 = var2.bind(var3)(var1);
            var7 = _closure1_slot3;
            var1 = 2;
            var2 = var7.bind(var5)(var2, var1);
            var3 = 0;
            var1 = var2[var3];
            _closure2_slot3 = var1;
            var6 = 1;
            var2 = var2[var6];
            _closure2_slot4 = var2;
            var8 = 21;
            var2 = var4[var8];
            var17 = var9.bind(var5)(var2);
            var14 = var17.useStateFromStores;
            var2 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var2;
            var10 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getInvite;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var14.bind(var17)(var13, var10);
            _closure2_slot5 = var10;
            var8 = var4[var8];
            var13 = var9.bind(var5)(var8);
            var9 = var13.useStateFromStores;
            var8 = new Array(3);
            var8[0] = var2;
            var2 = _closure1_slot9;
            var8[1] = var2;
            var2 = _closure1_slot11;
            var8[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getInviteSettings;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = var4.channelId;
case 8:
                    if(!(var2 == var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure1_slot10;
                    var4 = var5.getGuildId;
                    var8 = var4.bind(var5)();
                    var4 = var2 != var8;
                    var2 = null;
                    if(!var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = _closure1_slot11;
                    var6 = var7.getDefaultChannel;
                    var4 = _closure1_slot17;
                    var5 = var4.CREATE_INSTANT_INVITE;
                    var4 = true;
                    var2 = var6.bind(var7)(var8, var4, var5);
case 12:
                    return var2;
case 10:
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var27 = var9.bind(var13)(var8, var2);
            _closure2_slot6 = var27;
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getInviteSuggestionRows;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var8.bind(var9)(var2);
            var2 = var7.bind(var5)(var2, var6);
            var8 = var2[var3];
            var2 = _closure1_slot8;
            var6 = var2.bind(var5)();
            _closure2_slot7 = var6;
            var2 = _closure1_slot1;
            var7 = 22;
            var7 = var4[var7];
            var9 = var2.bind(var5)(var7);
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.loadInviteSuggestions;
                var2 = {};
                var5 = global;
                var5 = var5.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var8 = var6;
                var5 = new var8[var5](var7);
                var5 = var5 instanceof Object ? var5 : var6;
                var2['omitUserIds'] = var5;
                var5 = _closure2_slot6;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var9.bind(var5)(var7);
            var13 = _closure1_slot4;
            var9 = var13.useEffect;
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var10;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure2_slot7;
                    var2 = _closure2_slot5;
                    var2 = var2.code;
                    var2 = var4[var2];
                    if(!(var3 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var13)(var6, var7);
            var9 = _closure1_slot4;
            var7 = var9.useLayoutEffect;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 24;
                    var8 = var8[var1];
                    var1 = undefined;
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.getHeaderTextButton;
                    var7 = _closure2_slot3;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 17;
                    var10 = var13[var6];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var1)(var6);
                    var6 = var6.t;
                    if(var7) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var7 = var6.5WxrcX;
                    var7 = var10.bind(var11)(var7);
                    _fun0005_ip = 19; continue _fun0005;
case 17:
                    var6 = var6.i4jeWV;
                    var7 = var10.bind(var11)(var6);
case 19:
                    var6 = function() {
                        var9 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 25;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var9.bind(var1)(var2);
                        var5 = var2.AccessibilityAnnouncer;
                        var3 = var5.announce;
                        var2 = 17;
                        var6 = var4[var2];
                        var6 = var9.bind(var1)(var6);
                        var8 = var6.intl;
                        var6 = var8.string;
                        var2 = var4[var2];
                        var2 = var9.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.FY/yLS;
                        var2 = var6.bind(var8)(var2);
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure2_slot1;
                        var3 = var3.bind(var1)();
                        var2 = _closure2_slot3;
                        var6 = !var2;
                        var3 = _closure1_slot1;
                        var2 = 14;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot14;
                        var3 = var2.USER_FLOW_TRANSITION;
                        var2 = {};
                        var8 = _closure1_slot15;
                        var8 = var8.GUILD_CREATE_MODAL;
                        var2['flow_type'] = var8;
                        var7 = _closure1_slot13;
                        var7 = var7.GUILD_INVITE;
                        var2['from_step'] = var7;
                        var7 = 'modal_closed';
                        var2['to_step'] = var7;
                        var2['skip'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var2['headerRight'] = var6;
                    var5 = function headerLeft() {
                        var1 = null;
                        return var1;
                    };
                    var2['headerLeft'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var7.bind(var9)(var1, var6);
            var1 = 26;
            var1 = var4[var1];
            var4 = var2.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var10;
            var2 = undefined;
            if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = var10.code;
case 20:
            var20 = var4.bind(var5)(var2);
            _closure2_slot8 = var20;
            var9 = var1 != var8;
            if(!var9) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var8.length;
            var9 = var2 > var3;
case 22:
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var27;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 24; continue _fun0006 }
case 15:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openGuildInviteScreen;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var3)(var1);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var4.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var27;
            var7 = var1 == var10;
            var2 = undefined;
            if(var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = var10.code;
case 25:
            var3[1] = var2;
            var3[2] = var20;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0007_ip = 27; continue _fun0007 }
case 15:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 28;
                    var4 = var3[var9];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.handleOpenShareSheet;
                    var4 = _closure2_slot5;
                    var4 = var5 == var4;
                    var5 = undefined;
                    if(var4) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var4 = _closure2_slot5;
                    var5 = var4.code;
case 28:
                    var4 = _closure2_slot6;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var9 = var8.bind(var3)(var2);
                    var8 = var9.getShareMessage;
                    var2 = _closure2_slot8;
                    var2 = var8.bind(var9)(var2);
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var2 = _closure2_slot4;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var4.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var27;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var2 = _closure2_slot6;
                    var1 = var3 != var2;
case 30:
                    if(!var1) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var3 = undefined;
                    var8 = var2.bind(var3)(var1);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot14;
                    var2 = var1.SEARCH_STARTED;
                    var1 = {};
                    var9 = _closure1_slot18;
                    var9 = var9.INSTANT_INVITE;
                    var1['search_type'] = var9;
                    var1 = var7.bind(var8)(var2, var1);
                    var2 = _closure1_slot0;
                    var1 = 28;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.showInstantInviteActionSheet;
                    var2 = _closure2_slot6;
                    var1 = {};
                    var6 = _closure1_slot16;
                    var6 = var6.GUILD_CREATE;
                    var1['source'] = var6;
                    var5 = _closure2_slot5;
                    var5 = var5.code;
                    var1['code'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var4.bind(var6)(var2, var3);
            if(!(var1 != var10)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            if(!(var1 != var27)) { _fun0002_ip = 34; continue _fun0002 }
case 36:
            var7 = var9;
            if(!var7) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var4 = _closure1_slot19;
            var3 = _closure1_slot23;
            var2 = {};
            var2['invite'] = var10;
            var2['suggestions'] = var8;
            var2['openInviteSheet'] = var6;
            var7 = var4.bind(var5)(var3, var2);
case 37:
            var4 = _closure1_slot20;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 30;
            var2 = var12[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var26 = true;
            var2['top'] = var26;
            var6 = var16.container;
            var2['style'] = var6;
            var10 = _closure1_slot19;
            var13 = 31;
            var6 = var12[var13];
            var6 = var19.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var11 = var16.header;
            var6['style'] = var11;
            var23 = 17;
            var11 = var12[var23];
            var11 = var19.bind(var5)(var11);
            var17 = var11.intl;
            var14 = var17.string;
            var11 = var12[var23];
            var11 = var19.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.OZ1qhI;
            var11 = var14.bind(var17)(var11);
            var6['children'] = var11;
            var8 = var10.bind(var5)(var8, var6);
            var6 = new Array(5);
            var6[0] = var8;
            var11 = _closure1_slot19;
            var8 = var12[var13];
            var8 = var19.bind(var5)(var8);
            var10 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var14 = var16.description;
            var8['style'] = var14;
            var14 = var12[var23];
            var14 = var19.bind(var5)(var14);
            var17 = var14.intl;
            var14 = var17.string;
            var12 = var12[var23];
            var12 = var19.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.eU2ZaG;
            var12 = var14.bind(var17)(var12);
            var8['children'] = var12;
            var8 = var11.bind(var5)(var10, var8);
            var6[1] = var8;
            var8 = !var9;
            if(var9) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var11 = _closure1_slot19;
            var10 = _closure1_slot5;
            var9 = {};
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 32;
            var12 = var17[var12];
            var12 = var14.bind(var5)(var12);
            var9['source'] = var12;
            var12 = 'contain';
            var9['resizeMode'] = var12;
            var12 = var16.headerImage;
            var9['style'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 39:
            var6[2] = var8;
            var10 = _closure1_slot20;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var16.linkContainer;
            var8['style'] = var11;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 33;
            var11 = var19[var11];
            var11 = var22.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var14 = var16.linkButton;
            var11['style'] = var14;
            var14 = 'button';
            var11['accessibilityRole'] = var14;
            var14 = var19[var23];
            var14 = var22.bind(var5)(var14);
            var21 = var14.intl;
            var17 = var21.string;
            var14 = var19[var23];
            var14 = var22.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.3XVNys;
            var14 = var17.bind(var21)(var14);
            var11['accessibilityLabel'] = var14;
            var14 = function onPress() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.handleCopy;
                var4 = _closure2_slot5;
                var5 = var4.code;
                var4 = _closure2_slot6;
                var3 = _closure1_slot16;
                var3 = var3.GUILD_CREATE;
                var3 = var6.bind(var7)(var5, var4, var3);
                var3 = _closure2_slot4;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var14;
            var17 = _closure1_slot19;
            var13 = var19[var13];
            var13 = var22.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            var13['children'] = var20;
            var14 = var17.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var21 = _closure1_slot19;
            var20 = _closure1_slot1;
            var14 = 34;
            var14 = var19[var14];
            var17 = var20.bind(var5)(var14);
            var14 = {};
            var28 = 35;
            var28 = var19[var28];
            var28 = var20.bind(var5)(var28);
            var14['source'] = var28;
            var28 = var16.linkButtonIcon;
            var14['style'] = var28;
            var14 = var21.bind(var5)(var17, var14);
            var13[1] = var14;
            var11['children'] = var13;
            var12 = var10.bind(var5)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var14 = _closure1_slot19;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = var16.inviteDetail;
            var12['style'] = var17;
            var21 = _closure1_slot19;
            var17 = 36;
            var17 = var19[var17];
            var20 = var20.bind(var5)(var17);
            var17 = {};
            var17['channel'] = var27;
            var17['canEditInvite'] = var26;
            var17['callbackActionSheet'] = var25;
            var24 = function onEdit() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onEdit'] = var24;
            var24 = _closure1_slot16;
            var24 = var24.GUILD_CREATE;
            var17['source'] = var24;
            var17 = var21.bind(var5)(var20, var17);
            var12['children'] = var17;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var14 = _closure1_slot19;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = var16.shareButton;
            var12['style'] = var16;
            var17 = _closure1_slot19;
            var15 = 37;
            var15 = var19[var15];
            var15 = var22.bind(var5)(var15);
            var16 = var15.Button;
            var15 = {};
            var20 = var19[var23];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.Ej3B3d;
            var19 = var20.bind(var21)(var19);
            var15['text'] = var19;
            var15['onPress'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6[3] = var8;
            var6[4] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 34:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();