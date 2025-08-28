// app/modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchListItemTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot8 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getSearchQueryChannelIds(arg1) {
        var4 = _closure1_slot6;
        var3 = var4.getState;
        var2 = arg1;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.getChannelIds;
            var4 = var1.bind(var2)();
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getSearchQueryChannelIds'] = var4;
    var4 = function getSearchQueryUserIds(arg1) {
        var4 = _closure1_slot6;
        var3 = var4.getState;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var1 = var3.getPrefixTag;
                var1 = var1.bind(var3)();
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 66; continue _fun0001 }
 19:
                var2 = var3.getUserIds;
                var1 = var1.searchTokenType;
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
 66:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getSearchQueryUserIds'] = var4;
    var4 = function getSearchFilterHasIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 6;
            var5 = var2[var8];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.nrpA5O;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 762; continue _fun0002 }
 70:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.ZNR2fn;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 734; continue _fun0002 }
 129:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.20uQR0;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 706; continue _fun0002 }
 188:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.L4lxyM;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 678; continue _fun0002 }
 247:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.AV/v6u;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 650; continue _fun0002 }
 306:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.XM9XGB;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 622; continue _fun0002 }
 365:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.TNLcp6;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 594; continue _fun0002 }
 424:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.F8Wf0d;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 566; continue _fun0002 }
 480:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.PJgX2t;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0002_ip = 538; continue _fun0002 }
 536:
            return var3;
 538:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.StickerIcon;
            return var2;
 566:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 14;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.SoundboardIcon;
            return var2;
 594:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ImageIcon;
            return var2;
 622:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.VideoIcon;
            return var2;
 650:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.AttachmentIcon;
            return var2;
 678:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.PollsIcon;
            return var2;
 706:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EmbedIcon;
            return var2;
 734:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.LinkIcon;
            return var2;
 762:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ChatArrowRightIcon;
            return var1;
        }
    };
    var3['getSearchFilterHasIcon'] = var4;
    var4 = function getSearchFilterAuthorTypeIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 6;
            var5 = var2[var8];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.tPZo4u;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0003_ip = 240; continue _fun0003 }
 70:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.JL7sRU;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0003_ip = 212; continue _fun0003 }
 126:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.WjkIKS;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0003_ip = 184; continue _fun0003 }
 182:
            return var3;
 184:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.WebhookIcon;
            return var2;
 212:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.RobotIcon;
            return var2;
 240:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.UserIcon;
            return var1;
        }
    };
    var3['getSearchFilterAuthorTypeIcon'] = var4;
    var4 = function toSearchListUserItem(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.getGuildIdFromSearchContext;
            var1 = arg1;
            var9 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0004_ip = 194; continue _fun0004 }
 51:
            var2 = var1 == var9;
            var4 = null;
            if(!var2) { _fun0004_ip = 80; continue _fun0004 }
 60:
            var8 = _closure1_slot4;
            var3 = var8.getNickname;
            var2 = var5.id;
            var4 = var3.bind(var8)(var2);
 80:
            if(!(var1 == var4)) { _fun0004_ip = 105; continue _fun0004 }
 84:
            var8 = _closure1_slot3;
            var3 = var8.getNick;
            var2 = var5.id;
            var4 = var3.bind(var8)(var9, var2);
 105:
            if(!(var1 == var4)) { _fun0004_ip = 140; continue _fun0004 }
 109:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getName;
            var4 = var2.bind(var3)(var5);
 140:
            var2 = {};
            var3 = _closure1_slot7;
            var3 = var3.DM;
            var2['type'] = var3;
            var3 = {};
            var6 = _closure1_slot8;
            var6 = var6.NONE;
            var3['type'] = var6;
            var3['user'] = var5;
            var3['nickname'] = var4;
            var4 = arg3;
            var3['onPress'] = var4;
            var2['props'] = var3;
            return var2;
 194:
            return var1;
        }
    };
    var3['toSearchListUserItem'] = var4;
    var2 = function toSearchListChannelItem(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var7;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 273; continue _fun0005 }
 25:
            var2 = var3.isDM;
            var2 = var2.bind(var3)();
            if(var2) { _fun0005_ip = 118; continue _fun0005 }
 38:
            var2 = var3.isGroupDM;
            var2 = var2.bind(var3)();
            var4 = {};
            var6 = _closure1_slot7;
            if(var2) { _fun0005_ip = 89; continue _fun0005 }
 60:
            var2 = var6.GUILD_TEXT_CHANNEL;
            var4['type'] = var2;
            var2 = {};
            var2['channel'] = var3;
            var2['onPress'] = var7;
            var4['props'] = var2;
            var2 = var4;
            _fun0005_ip = 116; continue _fun0005;
 89:
            var6 = var6.GROUP_DM;
            var4['type'] = var6;
            var6 = {};
            var6['channel'] = var3;
            var6['onPress'] = var7;
            var4['props'] = var6;
            var2 = var4;
 116:
            return var2;
 118:
            var2 = var3.getRecipientId;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot5;
            var2 = var3.getUser;
            var9 = var2.bind(var3)(var4);
            var3 = var1 == var9;
            var2 = null;
            if(var3) { _fun0005_ip = 271; continue _fun0005 }
 155:
            var3 = {};
            var4 = _closure1_slot7;
            var4 = var4.DM;
            var3['type'] = var4;
            var4 = {};
            var6 = _closure1_slot8;
            var6 = var6.NONE;
            var4['type'] = var6;
            var4['user'] = var9;
            var10 = _closure1_slot4;
            var8 = var10.getNickname;
            var6 = var9.id;
            var6 = var8.bind(var10)(var6);
            if(!(var1 == var6)) { _fun0005_ip = 248; continue _fun0005 }
 215:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 20;
            var8 = var8[var7];
            var7 = undefined;
            var8 = var10.bind(var7)(var8);
            var7 = var8.getName;
            var6 = var7.bind(var8)(var9);
 248:
            var4['nickname'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onPress'] = var5;
            var3['props'] = var4;
            var2 = var3;
 271:
            return var2;
 273:
            return var1;
        }
    };
    var3['toSearchListChannelItem'] = var2;
    return var1;
})();