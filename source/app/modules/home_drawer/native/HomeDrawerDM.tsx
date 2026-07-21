// app/modules/home_drawer/native/HomeDrawerDM.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function HomeDrawerDMExpandedChildren(arg1) {
        var1 = arg1;
        var12 = var1.channel;
        var _closure2_slot0 = var12;
        var2 = _closure1_slot12;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot1 = var5;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var6 = 9;
        var8 = var7[var6];
        var11 = var2.bind(var4)(var8);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot8;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getUser;
            var4 = _closure2_slot0;
            var1 = var4.getRecipientId;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var10.bind(var11)(var9, var8);
        var _closure2_slot2 = var8;
        var8 = var7[var6];
        var11 = var2.bind(var4)(var8);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot8;
        var9 = new Array(2);
        var9[0] = var8;
        var8 = _closure1_slot6;
        var9[1] = var8;
        var8 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                var3 = var2 == var1;
                var1 = null;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot5;
                var5 = _closure2_slot0;
                var5 = var5.type;
                var7 = undefined;
                var5 = var6.bind(var7)(var5);
                if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot2;
                var5 = var2 != var5;
                var2 = null;
                if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.computeChannelName;
                var5 = _closure2_slot0;
                var4 = _closure1_slot8;
                var3 = _closure1_slot6;
                var2 = var6.bind(var7)(var5, var4, var3);
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var13 = var10.bind(var11)(var9, var8);
        var _closure2_slot3 = var13;
        var8 = 11;
        var8 = var7[var8];
        var10 = var2.bind(var4)(var8);
        var9 = var10.useBaseChannelUnreadBadgeState;
        var8 = false;
        var8 = var9.bind(var10)(var12, var8);
        var10 = var8.unread;
        var9 = _closure1_slot1;
        var8 = 12;
        var8 = var7[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var8['unread'] = var10;
        var11 = var9.bind(var4)(var12, var8);
        var _closure2_slot4 = var11;
        var6 = var7[var6];
        var10 = var2.bind(var4)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot7;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var4 = _closure1_slot7;
            var3 = var4.getChannelMuteConfig;
            var1 = _closure2_slot0;
            var2 = var1.guild_id;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var9.bind(var10)(var8, var6);
        var _closure2_slot5 = var6;
        var10 = _closure1_slot3;
        var9 = var10.useMemo;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot5;
                var3 = null;
                if(!(var3 != var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var1 = {};
                var4 = _closure2_slot5;
                var4 = var4.end_time;
                var4 = var3 == var4;
                if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = global;
                var8 = var5.Date;
                var6 = _closure2_slot5;
                var9 = var6.end_time;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var6 = var6 instanceof Object ? var6 : var7;
                var5 = var5.Date;
                var7 = var5.prototype;
                var7 = Object.create(var7, {constructor: {value: var5}});
                var10 = var7;
                var5 = new var10[var5](var9);
                var5 = var5 instanceof Object ? var5 : var7;
                var4 = var6 > var5;
case 9:
                var1['isMuted'] = var4;
                var2 = _closure2_slot5;
                var2 = var2.end_time;
                var2 = var3 != var2;
                var1['isTemporary'] = var2;
                _fun0002_ip = 11; continue _fun0002;
case 7:
                var1 = {'isMuted': false, 'isTemporary': false};
case 11:
                return var1;
            }
        };
        var10 = var9.bind(var10)(var6, var8);
        var _closure2_slot6 = var10;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var6 = new Array(4);
        var6[0] = var13;
        var6[1] = var10;
        var13 = var5.title;
        var6[2] = var13;
        var5 = var5.titleText;
        var6[3] = var5;
        var5 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot6;
                var2 = null;
                if(!(var2 != var1)) { _fun0003_ip = 12; continue _fun0003 }
case 8:
                var1 = _closure2_slot6;
                var1 = var1.isMuted;
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 12:
                var8 = _closure1_slot9;
                _fun0003_ip = 14; continue _fun0003;
case 13:
                var1 = _closure2_slot6;
                if(!(var2 != var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var1 = _closure2_slot6;
                var1 = var1.isTemporary;
                if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BellSlashIcon;
                _fun0003_ip = 18; continue _fun0003;
case 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = var2.BellZIcon;
case 18:
                var8 = var1;
case 14:
                var4 = _closure1_slot11;
                var3 = _closure1_slot4;
                var2 = {};
                var11 = _closure2_slot1;
                var1 = var11.title;
                var2['style'] = var1;
                var9 = _closure1_slot10;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.Text;
                var5 = {'variant': 'text-md/medium', 'style': null, 'lineClamp': 1, 'color': 'text-default'};
                var11 = var11.titleText;
                var5['style'] = var11;
                var10 = _closure2_slot3;
                var5['children'] = var10;
                var7 = var9.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot10;
                var6 = {};
                var9 = 'xs';
                var6['size'] = var9;
                var6 = var7.bind(var1)(var8, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var6 = var8.bind(var9)(var5, var6);
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var5 = new Array(3);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var5 = _closure1_slot10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.ChannelRowPreview;
                var2 = {};
                var7 = _closure2_slot0;
                var2['channel'] = var7;
                var7 = _closure2_slot4;
                var2['message'] = var7;
                var7 = 'text-xs/medium';
                var2['variant'] = var7;
                var7 = 'text-strong';
                var2['color'] = var7;
                var7 = 17;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.ChannelListLayoutTypes;
                var7 = var7.COZY;
                var2['layout'] = var7;
                var6 = _closure2_slot6;
                var6 = var6.isMuted;
                var2['muted'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 19:
                return var1;
            }
        };
        var5 = var8.bind(var9)(var3, var5);
        var3 = _closure1_slot10;
        var1 = 18;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.HomeDrawerSharedItem;
        var1 = {};
        var1['title'] = var6;
        var1['subtitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isMultiUserDM;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['title'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['titleText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerDM.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerDMExpandedChildrenWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 19;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var7 = var1.MobileHomeDrawerExperiment;
            var3 = var7.useConfig;
            var1 = {};
            var8 = 'dm-expanded-children';
            var1['location'] = var8;
            var1 = var3.bind(var7)(var1);
            var7 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 20;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var1 = null;
            if(!var7) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var1 = null;
            if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 23:
            var4 = _closure1_slot10;
            var3 = _closure1_slot13;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();