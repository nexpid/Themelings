// app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function ChannelActionButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var1 = var1.screenIndex;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot14;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 10;
            var2 = var12[var2];
            var2 = var7.bind(var4)(var2);
            var9 = var2.bind(var4)(var10);
            var8 = _closure1_slot0;
            var2 = 11;
            var2 = var12[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useCanSearchForumPosts;
            var3 = var2.bind(var3)(var10);
            var2 = 12;
            var2 = var12[var2];
            var11 = var8.bind(var4)(var2);
            var2 = var11.useThreadNotificationSetting;
            var13 = var2.bind(var11)(var10);
            var2 = _closure1_slot11;
            var11 = var2.NO_MESSAGES;
            var2 = 13;
            var2 = var12[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = 14;
            var7 = var12[var7];
            var14 = var8.bind(var4)(var7);
            var12 = var14.useStateFromStores;
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
            var8 = var12.bind(var14)(var8, var7);
            var7 = new Array(0);
            var _closure2_slot2 = var7;
            var14 = var10.type;
            var12 = _closure1_slot8;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var14)) { _fun0001_ip = 768; continue _fun0001 }
 208:
            var12 = _closure1_slot8;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var14)) { _fun0001_ip = 634; continue _fun0001 }
 225:
            var12 = _closure1_slot8;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var14)) { _fun0001_ip = 634; continue _fun0001 }
 242:
            var12 = _closure1_slot8;
            var12 = var12.PUBLIC_THREAD;
            if(!(var12 !== var14)) { _fun0001_ip = 287; continue _fun0001 }
 256:
            var12 = _closure1_slot8;
            var12 = var12.PRIVATE_THREAD;
            if(!(var12 !== var14)) { _fun0001_ip = 287; continue _fun0001 }
 270:
            var12 = _closure1_slot8;
            var12 = var12.ANNOUNCEMENT_THREAD;
            if(!(var12 === var14)) { _fun0001_ip = 506; continue _fun0001 }
 287:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 20;
            var12 = var15[var12];
            var15 = var14.bind(var4)(var12);
            var14 = var15.getCurrentConfig;
            var12 = {};
            var16 = 'ChannelActionButtons';
            var12['location'] = var16;
            var12 = var14.bind(var15)(var12);
            var12 = var12.enabled;
            if(var12) { _fun0001_ip = 506; continue _fun0001 }
 341:
            var12 = var10.isForumPost;
            var12 = var12.bind(var10)();
            if(var12) { _fun0001_ip = 891; continue _fun0001 }
 357:
            var12 = _closure1_slot1;
            if(!(var13 !== var11)) { _fun0001_ip = 378; continue _fun0001 }
 365:
            var13 = _closure1_slot2;
            var11 = 22;
            var11 = var13[var11];
            _fun0001_ip = 389; continue _fun0001;
 378:
            var14 = _closure1_slot2;
            var13 = 21;
            var11 = var14[var13];
 389:
            var13 = var12.bind(var4)(var11);
            var12 = var7.push;
            var11 = {};
            var11['source'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 23;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.BellIcon;
            var11['IconComponent'] = var13;
            var13 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showThreadNotificationsBottomSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11['onPress'] = var13;
            var13 = 18;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.HcoRu7;
            var13 = var14.bind(var15)(var13);
            var11['accessibilityLabel'] = var13;
            var11 = var12.bind(var7)(var11);
            _fun0001_ip = 891; continue _fun0001;
 506:
            var12 = var7.push;
            var11 = {};
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 15;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var11['source'] = var13;
            var16 = _closure1_slot0;
            var13 = 16;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.MagnifyingGlassIcon;
            var11['IconComponent'] = var13;
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = var1.id;
                    var1 = undefined;
                    var4 = true;
                    var3 = 'initial';
                    var3 = var7.bind(var1)(var5, var4, var3);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0002_ip = 128; continue _fun0002 }
 67:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 26;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var5 = var7.getChatInputRef;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var4 = var5.bind(var7)(var4, var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 128; continue _fun0002 }
 118:
                    var3 = var4.blur;
                    var3 = var3.bind(var4)();
 128:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isSwipeToMemberListEnabled;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var3) { _fun0002_ip = 261; continue _fun0002 }
 169:
                    var3 = 29;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var3 = var7.getRootNavigationRef;
                    var9 = var3.bind(var7)();
                    var3 = null;
                    if(!(var3 != var9)) { _fun0002_ip = 259; continue _fun0002 }
 197:
                    var3 = var9.isReady;
                    var3 = var3.bind(var9)();
                    if(!var3) { _fun0002_ip = 259; continue _fun0002 }
 210:
                    var8 = var9.navigate;
                    var7 = {'channelId': null, 'search': true, 'source': 'channel-header-search'};
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var7['channelId'] = var3;
                    var3 = 'sidebar';
                    var3 = var8.bind(var9)(var3, var7);
                    _fun0002_ip = 334; continue _fun0002;
 259:
                    return var1;
 261:
                    var3 = 28;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.dispatch;
                    var2 = _closure1_slot10;
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
 334:
                    return var1;
                }
            };
            var11['onPress'] = var13;
            var13 = 18;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.5h0QOD;
            var13 = var14.bind(var15)(var13);
            var11['accessibilityLabel'] = var13;
            var11 = var12.bind(var7)(var11);
            _fun0001_ip = 891; continue _fun0001;
 634:
            if(!var3) { _fun0001_ip = 891; continue _fun0001 }
 640:
            var11 = var7.push;
            var3 = {};
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 15;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var3['source'] = var12;
            var15 = _closure1_slot0;
            var12 = 16;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.MagnifyingGlassIcon;
            var3['IconComponent'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
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
            var12 = 18;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.5h0QOD;
            var12 = var13.bind(var14)(var12);
            var3['accessibilityLabel'] = var12;
            var3 = var11.bind(var7)(var3);
            _fun0001_ip = 891; continue _fun0001;
 768:
            var11 = var7.push;
            var3 = {};
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 15;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var3['source'] = var12;
            var15 = _closure1_slot0;
            var12 = 16;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.MagnifyingGlassIcon;
            var3['IconComponent'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
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
            var12 = 18;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.5h0QOD;
            var12 = var13.bind(var14)(var12);
            var3['accessibilityLabel'] = var12;
            var3 = var11.bind(var7)(var3);
 891:
            if(!var2) { _fun0001_ip = 905; continue _fun0001 }
 894:
            var11 = var7.length;
            var3 = 0;
            var2 = var3 !== var11;
 905:
            if(var2) { _fun0001_ip = 1034; continue _fun0001 }
 911:
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
            if(!var8) { _fun0001_ip = 972; continue _fun0001 }
 969:
            var8 = var11;
 972:
            if(!var8) { _fun0001_ip = 1003; continue _fun0001 }
 975:
            var11 = _closure1_slot9;
            var13 = var11.GUILD_THREADS_ONLY;
            var12 = var13.has;
            var11 = var10.type;
            var11 = var12.bind(var13)(var11);
            var8 = !var11;
 1003:
            if(!var3) { _fun0001_ip = 1009; continue _fun0001 }
 1006:
            var3 = !var9;
 1009:
            if(!var3) { _fun0001_ip = 1025; continue _fun0001 }
 1012:
            var9 = var10.isForumLikeChannel;
            var9 = var9.bind(var10)();
            var3 = !var9;
 1025:
            if(!var3) { _fun0001_ip = 1031; continue _fun0001 }
 1028:
            var3 = var8;
 1031:
            var2 = !var3;
 1034:
            if(var2) { _fun0001_ip = 1164; continue _fun0001 }
 1040:
            var3 = var7.unshift;
            var2 = {};
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 30;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var2['source'] = var8;
            var11 = _closure1_slot0;
            var8 = 31;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.ThreadIcon;
            var2['IconComponent'] = var8;
            var8 = function onPress() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 32;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var8;
            var8 = 18;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.B2panJ;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2 = var3.bind(var7)(var2);
 1164:
            var3 = _closure1_slot13;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.actionWrapper;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = arg1;
                var1 = _closure2_slot2;
                var2 = var1.length;
                var1 = 1;
                var7 = var2 - var1;
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 33;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg2;
                var6 = var6 === var7;
                var1['noMargin'] = var6;
                var9 = var1;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var6 = var5.accessibilityLabel;
                var5 = 'key';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function WrappedChannelNavButtons(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.channelId;
            var _closure2_slot0 = var4;
            var6 = var2.screenIndex;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var7 = var8[var5];
            var5 = undefined;
            var10 = var3.bind(var5)(var7);
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
            var1 = 34;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldAgeGateChannel;
            var3 = var1.bind(var3)(var4);
            var4 = null;
            var8 = var4 == var7;
            var1 = null;
            if(var8) { _fun0003_ip = 187; continue _fun0003 }
 107:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 35;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.shouldNSFWGateGuild;
            var11 = var4 == var7;
            var8 = undefined;
            if(var11) { _fun0003_ip = 147; continue _fun0003 }
 142:
            var8 = var7.guild_id;
 147:
            var8 = var9.bind(var10)(var8);
            var1 = null;
            if(var8) { _fun0003_ip = 187; continue _fun0003 }
 157:
            var1 = null;
            if(var3) { _fun0003_ip = 187; continue _fun0003 }
 162:
            var4 = _closure1_slot13;
            var3 = _closure1_slot15;
            var2 = {};
            var2['channel'] = var7;
            var2['screenIndex'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 187:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var7 = native4;
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
    var7 = var5.bind(var1)(var7);
    var7 = var7.setIsChannelDetailsSearchActive;
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.ChannelTypes;
    var _closure1_slot8 = var8;
    var8 = var7.ChannelTypesSets;
    var _closure1_slot9 = var8;
    var7 = var7.ComponentActions;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ThreadMemberFlags;
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['actionWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/ChannelActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelActions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var10 = var2.screenIndex;
            var11 = var2.containerStyle;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 14;
            var5 = var3[var4];
            var4 = undefined;
            var8 = var2.bind(var4)(var5);
            var7 = var8.useStateFromStoresObject;
            var12 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var12;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var6 = _closure1_slot6;
                    var3 = var6.getChannel;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var6)(var2);
                    var2 = null;
                    var6 = var2 == var8;
                    var7 = undefined;
                    if(var6) { _fun0005_ip = 47; continue _fun0005 }
 37:
                    var6 = var8.isMultiUserDM;
                    var7 = var6.bind(var8)();
 47:
                    var6 = var2 != var7;
                    if(!var6) { _fun0005_ip = 57; continue _fun0005 }
 54:
                    var6 = var7;
 57:
                    var1['isMultiUserDM'] = var6;
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var4 = _closure2_slot0;
                    var5 = var5.bind(var6)(var4);
                    var4 = var2 == var5;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 99; continue _fun0005 }
 89:
                    var4 = var5.isDM;
                    var3 = var4.bind(var5)();
 99:
                    var2 = var2 != var3;
                    if(!var2) { _fun0005_ip = 109; continue _fun0005 }
 106:
                    var2 = var3;
 109:
                    var1['isDM'] = var2;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var5, var1);
            var5 = var1.isMultiUserDM;
            var7 = var1.isDM;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useHasForumSearchQuery;
            var8 = var1.bind(var2)(var9);
            var3 = _closure1_slot13;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var11;
            if(var8) { _fun0004_ip = 203; continue _fun0004 }
 132:
            if(var7) { _fun0004_ip = 165; continue _fun0004 }
 135:
            if(var5) { _fun0004_ip = 165; continue _fun0004 }
 138:
            var8 = _closure1_slot13;
            var7 = _closure1_slot16;
            var5 = {};
            var5['channelId'] = var9;
            var5['screenIndex'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0004_ip = 201; continue _fun0004;
 165:
            var10 = _closure1_slot13;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 37;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channelId'] = var9;
            var5 = var10.bind(var4)(var8, var7);
 201:
            _fun0004_ip = 245; continue _fun0004;
 203:
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 36;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ForumChannelCloseSearchButton;
            var6 = {};
            var6['channelId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 245:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();