// app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function JoinCallButton() {
        var4 = _closure1_slot13;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 11;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PhoneCallIcon;
        var1 = {};
        var6 = 'sm';
        var1['size'] = var6;
        var6 = _closure1_slot1;
        var5 = 12;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.unsafe_rawColors;
        var5 = var5.GREEN_360;
        var1['color'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function EndCallButton() {
        var4 = _closure1_slot13;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 13;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PhoneHangUpIcon;
        var1 = {};
        var6 = 'sm';
        var1['size'] = var6;
        var6 = _closure1_slot1;
        var5 = 12;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.unsafe_rawColors;
        var5 = var5.RED_400;
        var1['color'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function ChannelActionButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var1 = var1.screenIndex;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot15;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var9 = var2.bind(var4)(var10);
            var12 = _closure1_slot0;
            var2 = 15;
            var2 = var17[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useCanSearchForumPosts;
            var3 = var2.bind(var3)(var10);
            var2 = 16;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = 17;
            var7 = var17[var11];
            var14 = var12.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot4;
                var3 = var4.hasThreadsForChannel;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var13.bind(var14)(var8, var7);
            var7 = new Array(0);
            var _closure2_slot2 = var7;
            var13 = 18;
            var13 = var17[var13];
            var14 = var12.bind(var4)(var13);
            var13 = var14.useCanJoinThreadVoice;
            var16 = var13.bind(var14)(var10);
            var13 = var17[var11];
            var19 = var12.bind(var4)(var13);
            var18 = var19.useStateFromStores;
            var13 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isInChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var18.bind(var19)(var14, var13);
            var11 = var17[var11];
            var19 = var12.bind(var4)(var11);
            var18 = var19.useStateFromStores;
            var11 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isEmpty;
                var5 = _closure1_slot7;
                var4 = var5.getVoiceStatesForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var13 = var18.bind(var19)(var13, var11);
            var11 = 20;
            var11 = var17[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.bind(var4)(var10);
            var11 = 21;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.useConversationsHeaderButton;
            var12 = var11.bind(var12)(var10);
            var _closure2_slot3 = var12;
            var11 = var10.isVocalThread;
            var11 = var11.bind(var10)();
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var16;
case 2:
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var13;
case 4:
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var7.push;
            var11 = {};
            var16 = null;
            var11['source'] = var16;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = _closure1_slot16;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var16 = _closure1_slot17;
case 10:
            var11['IconComponent'] = var16;
            if(var14) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openChannelCallModal;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 11:
            var11['onPress'] = var15;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 23;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var15.My50nf;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var15 = var15["4ry6yi"];
            var14 = var16.bind(var17)(var15);
case 15:
            var11['accessibilityLabel'] = var14;
            var11 = var13.bind(var7)(var11);
case 6:
            var13 = var10.type;
            var11 = _closure1_slot9;
            var11 = var11.GUILD_DIRECTORY;
            if(!(var11 !== var13)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = _closure1_slot9;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var13)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot9;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var13)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var11 = null;
            if(!(var11 != var12)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var7.push;
            var11 = var11.bind(var7)(var12);
case 21:
            var12 = var7.push;
            var11 = {};
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 24;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var11['source'] = var13;
            var16 = _closure1_slot0;
            var13 = 25;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.MagnifyingGlassIcon;
            var11['IconComponent'] = var13;
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var5 = var1.id;
                    var1 = undefined;
                    var4 = true;
                    var3 = 'initial';
                    var3 = var7.bind(var1)(var5, var4, var3);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 28;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var5 = var7.getChatInputRef;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var4 = var5.bind(var7)(var4, var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
                    var3 = var4.blur;
                    var3 = var3.bind(var4)();
case 23:
                    var3 = _closure2_slot0;
                    var4 = var3.isThread;
                    var10 = var4.bind(var3)();
                    var4 = var3.getGuildId;
                    var9 = var4.bind(var3)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 30;
                    var7 = var5[var7];
                    var8 = var4.bind(var1)(var7);
                    var7 = var8.getChannelDetailsSearchContext;
                    var3 = var3.id;
                    var9 = var7.bind(var8)(var3, var9, var10);
                    var7 = _closure1_slot1;
                    var3 = 31;
                    var3 = var5[var3];
                    var8 = var7.bind(var1)(var3);
                    var7 = var8.trackSearchOpened;
                    var3 = {};
                    var3['searchContext'] = var9;
                    var9 = _closure1_slot12;
                    var9 = var9.CHANNEL_HEADER;
                    var3['searchLocation'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 32;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isSwipeToMemberListEnabled;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var3) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var3 = 34;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var3 = var7.getRootNavigationRef;
                    var9 = var3.bind(var7)();
                    var3 = null;
                    if(!(var3 != var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var3 = var9.isReady;
                    var3 = var3.bind(var9)();
                    if(!var3) { _fun0002_ip = 28; continue _fun0002 }
case 3:
                    var8 = var9.navigate;
                    var7 = {'channelId': null, 'search': true, 'source': 'channel-header-search'};
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var7['channelId'] = var3;
                    var3 = 'sidebar';
                    var3 = var8.bind(var9)(var3, var7);
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    return var1;
case 26:
                    var3 = 33;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.dispatch;
                    var2 = _closure1_slot11;
                    var3 = var2.SHOW_CHANNEL_DETAILS;
                    var2 = {};
                    var7 = 'channel-header-search';
                    var2['source'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var2['channelId'] = var7;
                    var6 = _closure2_slot1;
                    var2['screenIndex'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 30:
                    return var1;
                }
            };
            var11['onPress'] = var13;
            var13 = 23;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["5h0QOP"];
            var13 = var14.bind(var15)(var13);
            var11['accessibilityLabel'] = var13;
            var11 = var12.bind(var7)(var11);
            _fun0001_ip = 31; continue _fun0001;
case 18:
            if(!var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var11 = var7.push;
            var3 = {};
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 24;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var3['source'] = var12;
            var15 = _closure1_slot0;
            var12 = 25;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.MagnifyingGlassIcon;
            var3['IconComponent'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateForumSearchQuery;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = '';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['onPress'] = var12;
            var12 = 23;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12["5h0QOP"];
            var12 = var13.bind(var14)(var12);
            var3['accessibilityLabel'] = var12;
            var3 = var11.bind(var7)(var3);
            _fun0001_ip = 31; continue _fun0001;
case 16:
            var11 = var7.push;
            var3 = {};
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 24;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var3['source'] = var12;
            var15 = _closure1_slot0;
            var12 = 25;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.MagnifyingGlassIcon;
            var3['IconComponent'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var12;
            var12 = 23;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12["5h0QOP"];
            var12 = var13.bind(var14)(var12);
            var3['accessibilityLabel'] = var12;
            var3 = var11.bind(var7)(var3);
case 31:
            if(!var2) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var11 = var7.length;
            var3 = 0;
            var2 = var3 !== var11;
case 33:
            if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = {};
            var3['channel'] = var10;
            var3['isChannelNSFWGated'] = var9;
            var3['channelHasThreads'] = var8;
            var10 = var3.channel;
            var9 = var3.isChannelNSFWGated;
            var11 = var3.channelHasThreads;
            var12 = _closure1_slot5;
            var8 = var12.has;
            var3 = var10.type;
            var3 = var8.bind(var12)(var3);
            var8 = !var3;
            if(!var8) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var8 = var11;
case 37:
            if(!var8) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = _closure1_slot10;
            var13 = var11.GUILD_THREADS_ONLY;
            var12 = var13.has;
            var11 = var10.type;
            var11 = var12.bind(var13)(var11);
            var8 = !var11;
case 39:
            if(!var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = !var9;
case 41:
            if(!var3) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = var10.isForumLikeChannel;
            var9 = var9.bind(var10)();
            var3 = !var9;
case 43:
            if(!var3) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var3 = var8;
case 45:
            var2 = !var3;
case 35:
            if(var2) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var3 = var7.unshift;
            var2 = {};
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 35;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var2['source'] = var8;
            var11 = _closure1_slot0;
            var8 = 36;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.ThreadIcon;
            var2['IconComponent'] = var8;
            var8 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 37;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var8;
            var8 = 23;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.B2panI;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2 = var3.bind(var7)(var2);
case 47:
            var3 = _closure1_slot13;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.actionWrapper;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot2;
                    var4 = var3.length;
                    var3 = 1;
                    var4 = var4 - var3;
                    var3 = arg2;
                    var8 = var3 === var4;
                    var1 = _closure2_slot3;
                    if(!(var2 !== var1)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 39;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var1['noMargin'] = var8;
                    var12 = var1;
                    var11 = var2;
                    var6 = copyDataProperties(var12, var11);
                    var9 = var2.accessibilityLabel;
                    var6 = 'key';
                    var1[5] = var9;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0003_ip = 51; continue _fun0003;
case 49:
                    var6 = _closure1_slot13;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 38;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.ConversationCoachmark;
                    var3 = {};
                    var3['isLast'] = var8;
                    var7 = function children(arg1) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 39;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = true;
                        var1['noMargin'] = var6;
                        var7 = _closure3_slot0;
                        var8 = var1;
                        var6 = copyDataProperties(var8, var7);
                        var6 = function onPress(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                var3 = _closure3_slot0;
                                var4 = var3.onPress;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                                var4 = _closure3_slot0;
                                var3 = var4.onPress;
                                var2 = arg1;
                                var2 = var3.bind(var4)(var2);
case 52:
                                return var1;
                            }
                        };
                        var5 = 'onPress';
                        var1[4] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['children'] = var7;
                    var2 = var2.accessibilityLabel;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 51:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function WrappedChannelNavButtons(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var6 = var2.screenIndex;
            var3 = var2.showCreateThread;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 17;
            var7 = var8[var5];
            var5 = undefined;
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var11;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var7, var1);
            var1 = 40;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useShouldHideChannelContent;
            var8 = var1.bind(var4)(var7);
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var1 = null;
            if(var8) { _fun0005_ip = 54; continue _fun0005 }
case 56:
            var1 = null;
            if(var3) { _fun0005_ip = 54; continue _fun0005 }
case 57:
            var4 = _closure1_slot13;
            var3 = _closure1_slot18;
            var2 = {};
            var2['channel'] = var7;
            var2['screenIndex'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 54:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var9 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var9);
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.ChannelTypes;
    var _closure1_slot9 = var8;
    var8 = var7.ChannelTypesSets;
    var _closure1_slot10 = var8;
    var7 = var7.ComponentActions;
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.SearchEntrypointAnalyticsLocations;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['actionWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/ChannelActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelActions(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var11 = var2.screenIndex;
            var12 = var2.containerStyle;
            var10 = var2.showCreateThread;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 17;
            var5 = var3[var4];
            var4 = undefined;
            var8 = var2.bind(var4)(var5);
            var7 = var8.useStateFromStoresObject;
            var13 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var13;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot6;
                    var3 = var6.getChannel;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var6)(var2);
                    var2 = null;
                    var6 = var2 == var8;
                    var7 = undefined;
                    if(var6) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var6 = var8.isMultiUserDM;
                    var7 = var6.bind(var8)();
case 58:
                    var6 = var2 != var7;
                    if(!var6) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var6 = var7;
case 60:
                    var1['isMultiUserDM'] = var6;
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var4 = _closure2_slot0;
                    var5 = var5.bind(var6)(var4);
                    var4 = var2 == var5;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var4 = var5.isDM;
                    var3 = var4.bind(var5)();
case 62:
                    var2 = var2 != var3;
                    if(!var2) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var2 = var3;
case 64:
                    var1['isDM'] = var2;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var5, var1);
            var5 = var1.isMultiUserDM;
            var7 = var1.isDM;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useHasForumSearchQuery;
            var8 = var1.bind(var2)(var9);
            var3 = _closure1_slot13;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var12;
            if(var8) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            if(var7) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            if(var5) { _fun0006_ip = 68; continue _fun0006 }
case 70:
            var8 = _closure1_slot13;
            var7 = _closure1_slot19;
            var5 = {};
            var5['channelId'] = var9;
            var5['screenIndex'] = var11;
            var5['showCreateThread'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0006_ip = 71; continue _fun0006;
case 68:
            var10 = _closure1_slot13;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 42;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channelId'] = var9;
            var7['screenIndex'] = var11;
            var5 = var10.bind(var4)(var8, var7);
case 71:
            _fun0006_ip = 72; continue _fun0006;
case 66:
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 41;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ForumChannelCloseSearchButton;
            var6 = {};
            var6['channelId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 72:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();