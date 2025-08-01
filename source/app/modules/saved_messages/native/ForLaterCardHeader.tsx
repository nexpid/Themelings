// app/modules/saved_messages/native/ForLaterCardHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function HeaderIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot7;
            var5 = undefined;
            var4 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var8 = var3.bind(var5)(var2);
            var3 = var8.useStateFromStores;
            var9 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var3.bind(var8)(var2, var1);
            var1 = null;
            if(!(var1 == var9)) { _fun0001_ip = 251; continue _fun0001 }
 86:
            if(!(var1 != var6)) { _fun0001_ip = 103; continue _fun0001 }
 90:
            var1 = var6.isGroupDM;
            var1 = var1.bind(var6)();
            if(var1) { _fun0001_ip = 181; continue _fun0001 }
 103:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var4 = var4.dmIcon;
            var1['style'] = var4;
            var10 = _closure1_slot5;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.ChatIcon;
            var4 = {};
            var11 = 'xxs';
            var4['size'] = var11;
            var4 = var10.bind(var5)(var8, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 249; continue _fun0001;
 181:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var6;
            var8 = _closure1_slot0;
            var6 = 9;
            var6 = var10[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.XSMALL;
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 249:
            _fun0001_ip = 316; continue _fun0001;
 251:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 7;
            var2 = var8[var6];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['guild'] = var9;
            var7 = _closure1_slot0;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.GuildIconSizes;
            var6 = var6.XSMALL;
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 316:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function ChannelName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot7;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var9 = var3.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var11 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var11;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var8.bind(var9)(var5, var1);
            var8 = _closure1_slot1;
            var1 = 11;
            var1 = var7[var1];
            var8 = var8.bind(var4)(var1);
            var1 = false;
            var8 = var8.bind(var4)(var2, var1);
            var1 = 12;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getChannelIconComponentWithGuild;
            var11 = var1.bind(var3)(var2, var5);
            var1 = var2.isPrivate;
            var5 = var1.bind(var2)();
            if(var5) { _fun0002_ip = 144; continue _fun0002 }
 138:
            var1 = null;
            var5 = var1 == var11;
 144:
            var1 = var2.isDM;
            var1 = var1.bind(var2)();
            var9 = var8;
            if(!var1) { _fun0002_ip = 224; continue _fun0002 }
 160:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var3 = var12[var1];
            var3 = var2.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.formatToPlainString;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.smD7XV;
            var1 = {};
            var1['username'] = var8;
            var9 = var3.bind(var7)(var2, var1);
 224:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var10.channelNameContainer;
            var1['style'] = var7;
            var7 = null;
            if(var5) { _fun0002_ip = 279; continue _fun0002 }
 249:
            var8 = _closure1_slot5;
            var5 = {};
            var12 = var10.channelTypeIcon;
            var5['style'] = var12;
            var12 = 'xxs';
            var5['size'] = var12;
            var7 = var8.bind(var4)(var11, var5);
 279:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var10 = var10.channelName;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['cardHeader'] = var9;
    var9 = {'borderRadius': null, 'width': 24, 'height': 24};
    var10 = 4;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['icon'] = var9;
    var9 = {};
    var12 = 6;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['dmIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    var4['channelNameContainer'] = var9;
    var9 = {};
    var9['flexShrink'] = var11;
    var4['channelName'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['channelTypeIcon'] = var9;
    var9 = {'marginVertical': 4294967292, 'marginLeft': 'auto'};
    var4['actionsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/native/ForLaterCardHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForLaterCardHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var9 = var1.actions;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.cardHeader;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var5 = {};
            var5['channel'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var7 = var12.isPrivate;
            var8 = var7.bind(var12)();
            var7 = null;
            if(var8) { _fun0003_ip = 136; continue _fun0003 }
 90:
            var13 = _closure1_slot5;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 5;
            var8 = var14[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.ChevronSmallRightIcon;
            var8 = {};
            var14 = 'xxs';
            var8['size'] = var14;
            var7 = var13.bind(var4)(var11, var8);
 136:
            var5[1] = var7;
            var11 = _closure1_slot5;
            var8 = _closure1_slot9;
            var7 = {};
            var7['channel'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var10 = var10.actionsContainer;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForLaterCardHeader'] = var2;
    return var1;
})();