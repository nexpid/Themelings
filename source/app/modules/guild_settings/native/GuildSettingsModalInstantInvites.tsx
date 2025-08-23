// app/modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function InvitesDisabledRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.onPauseInvites;
            var6 = var1.invitesDisabled;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 10;
            var2 = var1[var9];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var9];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Uwsjn5;
            var7 = var2.bind(var3)(var1);
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var9];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            if(var6) { _fun0001_ip = 179; continue _fun0001 }
 100:
            var12 = var3.format;
            var2 = var1[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var10 = var2.IFBHam;
            var2 = {};
            var14 = _closure1_slot1;
            var13 = 11;
            var13 = var1[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.getArticleURL;
            var13 = _closure1_slot11;
            var13 = var13.INVITE_DISABLED;
            var13 = var14.bind(var15)(var13);
            var2['helpArticleUrl'] = var13;
            var10 = var12.bind(var3)(var10, var2);
            _fun0001_ip = 211; continue _fun0001;
 179:
            var2 = var3.string;
            var1 = var1[var9];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.2LLbj4;
            var10 = var2.bind(var3)(var1);
 211:
            var3 = _closure1_slot12;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.TableCheckboxRow;
            var1 = {};
            var1['label'] = var7;
            var9 = _closure1_slot12;
            var7 = 13;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.TextWithIOSLinkWorkaround;
            var7 = {};
            var12 = 'text-xs/medium';
            var7['variant'] = var12;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['subLabel'] = var7;
            var7 = null;
            if(!var6) { _fun0001_ip = 357; continue _fun0001 }
 299:
            var10 = _closure1_slot12;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 14;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TableRowIcon;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 15;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var8['source'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 357:
            var1['icon'] = var7;
            var1['checked'] = var6;
            var1['onPress'] = var5;
            var5 = true;
            var1['start'] = var5;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = function GuildSettingsModalInstantInvites(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.invites;
            var _closure2_slot0 = var4;
            var8 = var2.guild;
            var _closure2_slot1 = var8;
            var9 = var2.showChannel;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0002_ip = 38; continue _fun0002 }
 36:
            var9 = false;
 38:
            var _closure2_slot2 = var9;
            var7 = var2.contentContainerStyle;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 16;
            var10 = var3[var10];
            var11 = var6.bind(var5)(var10);
            var10 = var11.useInvitesDisabledPermission;
            var15 = var10.bind(var11)(var8);
            _closure2_slot3 = var15;
            var13 = 17;
            var3 = var3[var13];
            var11 = var6.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuildIncident;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var10.bind(var11)(var6, var3);
            _closure2_slot4 = var17;
            var10 = var8.features;
            var6 = var10.has;
            var3 = _closure1_slot10;
            var3 = var3.INVITES_DISABLED;
            var11 = var6.bind(var10)(var3);
            if(var11) { _fun0002_ip = 288; continue _fun0002 }
 197:
            var6 = null;
            var10 = var6 == var17;
            var3 = undefined;
            if(var10) { _fun0002_ip = 214; continue _fun0002 }
 208:
            var3 = var17.invitesDisabledUntil;
 214:
            var3 = var6 != var3;
            if(!var3) { _fun0002_ip = 285; continue _fun0002 }
 221:
            var6 = global;
            var14 = var6.Date;
            var20 = var17.invitesDisabledUntil;
            var12 = var14.prototype;
            var12 = Object.create(var12, {constructor: {value: var14}});
            var21 = var12;
            var10 = new var21[var14](var20, var19);
            var10 = var10 instanceof Object ? var10 : var12;
            var6 = var6.Date;
            var12 = var6.prototype;
            var12 = Object.create(var12, {constructor: {value: var6}});
            var21 = var12;
            var6 = new var21[var6](var20);
            var6 = var6 instanceof Object ? var6 : var12;
            var3 = var10 > var6;
 285:
            var11 = var3;
 288:
            _closure2_slot5 = var11;
            var10 = _closure1_slot4;
            var6 = var10.useState;
            var3 = false;
            var6 = var6.bind(var10)(var3);
            var3 = _closure1_slot3;
            var16 = 2;
            var6 = var3.bind(var5)(var6, var16);
            var3 = 0;
            var10 = var6[var3];
            _closure2_slot6 = var10;
            var14 = 1;
            var6 = var6[var14];
            _closure2_slot7 = var6;
            var18 = _closure1_slot4;
            var12 = var18.useState;
            var6 = 21;
            var12 = var12.bind(var18)(var6);
            var6 = _closure1_slot3;
            var12 = var6.bind(var5)(var12, var16);
            var6 = var12[var3];
            var12 = var12[var14];
            _closure2_slot8 = var12;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var12 = new Array(3);
            var12[0] = var4;
            var12[1] = var15;
            var12[2] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.sortBy;
                    var4 = _closure2_slot0;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var1 = _closure2_slot2;
                            if(var1) { _fun0004_ip = 70; continue _fun0004 }
 13:
                            var4 = var2.inviter;
                            var1 = null;
                            var5 = var1 == var4;
                            var3 = undefined;
                            if(var5) { _fun0004_ip = 54; continue _fun0004 }
 30:
                            var5 = var4.username;
                            var4 = var1 == var5;
                            var3 = undefined;
                            if(var4) { _fun0004_ip = 54; continue _fun0004 }
 44:
                            var4 = var5.toLowerCase;
                            var3 = var4.bind(var5)();
 54:
                            var4 = var1 != var3;
                            var1 = '';
                            if(!var4) { _fun0004_ip = 68; continue _fun0004 }
 65:
                            var1 = var3;
 68:
                            _fun0004_ip = 104; continue _fun0004;
 70:
                            var3 = var2.channel;
                            var2 = null;
                            var4 = var2 == var3;
                            var2 = undefined;
                            if(var4) { _fun0004_ip = 101; continue _fun0004 }
 86:
                            var4 = var3.name;
                            var3 = var4.toLowerCase;
                            var2 = var3.bind(var4)();
 101:
                            var1 = var2;
 104:
                            return var1;
                        }
                    };
                    var1 = var5.bind(var6)(var4, var1);
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0003_ip = 75; continue _fun0003 }
 60:
                    var3 = var1.unshift;
                    var2 = _closure1_slot17;
                    var2 = var3.bind(var1)(var2);
 75:
                    return var1;
                }
            };
            var16 = var14.bind(var16)(var9, var12);
            _closure2_slot9 = var16;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var14 = var12.bind(var5)(var9);
            var13 = var14.useStateFromStoresArray;
            var9 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getSortedLinkedChannelsForGuild;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var13.bind(var14)(var12, var9);
            _closure2_slot10 = var9;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var12 = new Array(2);
            var12[0] = var16;
            var12[1] = var9;
            var9 = function() {
                var5 = _closure2_slot9;
                var3 = var5.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = 'invite';
                    var1['type'] = var2;
                    var2 = arg1;
                    var1['data'] = var2;
                    return var1;
                };
                var7 = var3.bind(var5)(var1);
                var1 = new Array(0);
                var6 = 0;
                var8 = var1;
                var6 = arraySpread(var8, var7, var6);
                var5 = _closure2_slot10;
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = {};
                    var2 = 'channel';
                    var1['type'] = var2;
                    var2 = arg1;
                    var1['data'] = var2;
                    return var1;
                };
                var7 = var4.bind(var5)(var2);
                var8 = var1;
                var2 = arraySpread(var8, var7, var6);
                return var1;
            };
            var13 = var13.bind(var14)(var9, var12);
            var16 = _closure1_slot4;
            var14 = var16.useEffect;
            var12 = function() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = 21;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var14.bind(var16)(var12, var9);
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var12 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'invite';
                    if(!(var1 !== var3)) { _fun0005_ip = 28; continue _fun0005 }
 16:
                    var1 = var2.data;
                    var1 = var1.id;
                    _fun0005_ip = 38; continue _fun0005;
 28:
                    var2 = var2.data;
                    var1 = var2.code;
 38:
                    return var1;
                }
            };
            var9 = new Array(0);
            var9 = var14.bind(var16)(var12, var9);
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var12 = new Array(3);
            var12[0] = var10;
            var12[1] = var17;
            var12[2] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 282; continue _fun0006 }
 13:
                    var3 = _closure2_slot7;
                    var4 = undefined;
                    var1 = true;
                    var1 = var3.bind(var4)(var1);
 26: // try_start_0 // try_start_1
                    var1 = {};
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 19;
                    var6 = var3[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.GuildIncidentActionSources;
                    var6 = var6.MESSAGE;
                    var1['source'] = var6;
                    var6 = 20;
                    var6 = var3[var6];
                    var9 = var8.bind(var4)(var6);
                    var7 = var9.getIncidentAlertType;
                    var6 = _closure2_slot4;
                    var6 = var7.bind(var9)(var6);
                    var1['alertType'] = var6;
                    var6 = _closure1_slot1;
                    var5 = 21;
                    var5 = var3[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.openLazy;
                    var5 = 23;
                    var5 = var3[var5];
                    var8 = var8.bind(var4)(var5);
                    var5 = 22;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var5 = var8.bind(var4)(var5, var3);
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['guild'] = var8;
                    var3['analyticsData'] = var1;
                    var1 = 'GuildIncidentActionsActionSheet';
                    var1 = var6.bind(var7)(var5, var1, var3);
 179: // try_end0
                    _fun0006_ip = 254; continue _fun0006;
 181: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 24;
                    var1 = var9[var1];
                    var5 = var8.bind(var4)(var1);
                    var3 = var5.open;
                    var1 = {};
                    var7 = 'GUILD_SETTINGS_MODAL_INVITE_ERROR';
                    var1['key'] = var7;
                    var7 = 15;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var1['icon'] = var7;
                    var6 = var6.message;
                    var1['content'] = var6;
                    var1 = var3.bind(var5)(var1);
 254: // try_end1
                    var3 = _closure2_slot7;
                    var1 = false;
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 282; continue _fun0006;
 267: // catch_target1
                    CatchBlockStart(arg_register=0);
                    var3 = _closure2_slot7;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    throw var1;
 282:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var16)(var8, var12);
            _closure2_slot11 = var12;
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var12;
            var8[2] = var10;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var2 = var7.type;
                    var1 = 'invite';
                    if(!(var1 !== var2)) { _fun0007_ip = 75; continue _fun0007 }
 21:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LinkedChannelInvite;
                    var1 = {};
                    var5 = var7.data;
                    var1['channel'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0007_ip = 193; continue _fun0007;
 75:
                    var2 = var7.data;
                    var4 = var2.code;
                    var2 = _closure1_slot16;
                    if(!(var4 !== var2)) { _fun0007_ip = 142; continue _fun0007 }
 96:
                    var6 = _closure1_slot12;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 25;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = {};
                    var7 = var7.data;
                    var2['invite'] = var7;
                    var2 = var6.bind(var5)(var4, var2);
                    _fun0007_ip = 190; continue _fun0007;
 142:
                    var6 = _closure1_slot12;
                    var5 = _closure1_slot19;
                    var4 = {};
                    var7 = _closure2_slot5;
                    var4['invitesDisabled'] = var7;
                    var7 = _closure2_slot6;
                    var4['invitesDisabledLoading'] = var7;
                    var3 = _closure2_slot11;
                    var4['onPauseInvites'] = var3;
                    var3 = undefined;
                    var2 = var6.bind(var3)(var5, var4);
 190:
                    var1 = var2;
 193:
                    return var1;
                }
            };
            var8 = var14.bind(var16)(var1, var8);
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 989; continue _fun0002 }
 650:
            var1 = var13.length;
            if(!(var3 !== var1)) { _fun0002_ip = 766; continue _fun0002 }
 659:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var1 = {};
            var14 = _closure1_slot15;
            if(var15) { _fun0002_ip = 684; continue _fun0002 }
 676:
            var15 = var14.list;
            _fun0002_ip = 690; continue _fun0002;
 684:
            var15 = var14.listWithPause;
 690:
            var14 = new Array(1);
            var14[0] = var15;
            var1['style'] = var14;
            var1['data'] = var13;
            var1['keyExtractor'] = var9;
            var1['renderItem'] = var8;
            var8 = 10;
            var1['initialNumToRender'] = var8;
            var1['windowSize'] = var6;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = _closure1_slot15;
            var7 = var7.content;
            var6[1] = var7;
            var1['contentContainerStyle'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 987; continue _fun0002;
 766:
            var6 = _closure1_slot14;
            var4 = _closure1_slot13;
            var3 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot19;
            var7 = {};
            var7['onPauseInvites'] = var12;
            var7['invitesDisabled'] = var11;
            var7['invitesDisabledLoading'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot12;
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 27;
            var8 = var15[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var14 = _closure1_slot0;
            var11 = 28;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.InviteEmpty;
            var8['Illustration'] = var11;
            var11 = 10;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.+nLJkZ;
            var12 = var13.bind(var16)(var12);
            var8['title'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.F53CAQ;
            var11 = var12.bind(var13)(var11);
            var8['body'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var1 = var6.bind(var5)(var4, var3);
 987:
            _fun0002_ip = 1027; continue _fun0002;
 989:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 26;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SceneLoadingIndicator;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 1027:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Platform;
    var10 = var5.StyleSheet;
    var5 = var5.FlatList;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var13 = 8;
    var5 = var7[var13];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildFeatures;
    var _closure1_slot10 = var8;
    var5 = var5.HelpdeskArticles;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot12 = var8;
    var8 = var5.Fragment;
    var _closure1_slot13 = var8;
    var5 = var5.jsxs;
    var _closure1_slot14 = var5;
    var8 = var10.create;
    var5 = {};
    var11 = {};
    var11['paddingTop'] = var13;
    var5['list'] = var11;
    var11 = {'padding': 16, 'gap': 24};
    var5['content'] = var11;
    var11 = {};
    var11['paddingTop'] = var12;
    var5['listWithPause'] = var11;
    var5 = var8.bind(var10)(var5);
    var _closure1_slot15 = var5;
    var8 = 'pause_invites';
    var _closure1_slot16 = var8;
    var5 = {};
    var5['code'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var17 = var8;
    var16 = var5;
    var5 = new var17[var9](var16, var15);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot17 = var5;
    var5 = {};
    var _closure1_slot18 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedGuildSettingsModalInstantInvites(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var10 = var2.contentContainerStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var6 = var4[var2];
            var5 = undefined;
            var11 = var3.bind(var5)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var9.bind(var11)(var8, var6);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getProps;
                    var1 = var1.bind(var3)();
                    var1 = var1.invites;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0009_ip = 33; continue _fun0009 }
 29:
                    var1 = _closure1_slot18;
 33:
                    return var1;
                }
            };
            var11 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 != var12;
            if(!var2) { _fun0008_ip = 230; continue _fun0008 }
 123:
            var4 = _closure1_slot14;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot20;
            var6 = {};
            var6['guild'] = var12;
            var6['invites'] = var11;
            var6['contentContainerStyle'] = var10;
            var10 = true;
            var6['showChannel'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot12;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 29;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 230:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['InvitesDisabledRow'] = var2;
    return var1;
})();