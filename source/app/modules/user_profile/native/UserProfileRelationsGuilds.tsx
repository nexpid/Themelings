// app/modules/user_profile/native/UserProfileRelationsGuilds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildIdentity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.user;
            var1 = var1.item;
            var2 = _closure1_slot10;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var10 = null;
            var2 = var10 == var11;
            var12 = undefined;
            if(var2) { _fun0001_ip = 58; continue _fun0001 }
 37:
            var3 = var11.hasAvatarForGuild;
            var2 = var1.guild;
            var2 = var2.id;
            var12 = var3.bind(var11)(var2);
 58:
            var9 = var1.nick;
            var14 = var1.guild;
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.mutualServerIdentity;
            var1['style'] = var5;
            var7 = null;
            if(!var12) { _fun0001_ip = 185; continue _fun0001 }
 94:
            var13 = _closure1_slot8;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 7;
            var5 = var18[var16];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var17 = _closure1_slot0;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.SIZE_16;
            var5['size'] = var16;
            var15 = var15.avatar;
            var5['style'] = var15;
            var5['user'] = var11;
            var14 = var14.id;
            var5['guildId'] = var14;
            var14 = true;
            var5['animate'] = var14;
            var7 = var13.bind(var4)(var8, var5);
 185:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 8;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            if(!(var10 == var9)) { _fun0001_ip = 253; continue _fun0001 }
 240:
            var10 = null;
            if(!var12) { _fun0001_ip = 250; continue _fun0001 }
 245:
            var10 = var11.username;
 250:
            var9 = var10;
 253:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var4['flex'] = var10;
    var10 = {'flexDirection': 'row', 'marginTop': 4, 'alignItems': 'center'};
    var4['mutualServerIdentity'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var4['avatar'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var7 = var8.memo;
    var4 = function MutualGuildItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.item;
            var2 = var1.onSelectMutualGuild;
            var _closure2_slot0 = var2;
            var12 = var1.user;
            var6 = var11.guild;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot8;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var10 = _closure1_slot8;
            var9 = _closure1_slot1;
            var7 = 10;
            var7 = var13[var7];
            var9 = var9.bind(var3)(var7);
            var7 = {};
            var7['guild'] = var6;
            var7 = var10.bind(var3)(var9, var7);
            var1['leading'] = var7;
            var7 = null;
            if(!(var7 == var12)) { _fun0002_ip = 122; continue _fun0002 }
 114:
            var7 = var11.nick;
            _fun0002_ip = 146; continue _fun0002;
 122:
            var10 = _closure1_slot8;
            var9 = _closure1_slot12;
            var8 = {};
            var8['user'] = var12;
            var8['item'] = var11;
            var7 = var10.bind(var3)(var9, var8);
 146:
            var1['subLabel'] = var7;
            var6 = var6.name;
            var1['label'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToGuild;
                var3 = _closure2_slot1;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileRelationsGuilds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.onClose;
            var2 = var1.onSelectMutualGuild;
            var _closure2_slot0 = var2;
            var1 = var1.userId;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot10;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var2 = var8.useNoMutualServersSource;
            var10 = var2.bind(var8)();
            var12 = _closure1_slot3;
            var9 = var12.useEffect;
            var8 = new Array(1);
            var8[0] = var1;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var6 = 'Mutual Guilds';
                var2['type'] = var6;
                var6 = _closure2_slot1;
                var2['other_user_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var9.bind(var12)(var2, var8);
            var8 = _closure1_slot1;
            var2 = 14;
            var2 = var4[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var16 = var2.bottom;
            var8 = _closure1_slot5;
            var2 = var8.getUser;
            var2 = var2.bind(var8)(var1);
            var _closure2_slot2 = var2;
            var2 = 15;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getMutualGuilds;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var4.bind(var8)(var3, var1, var2);
            var1 = null;
            if(!(var1 == var12)) { _fun0003_ip = 261; continue _fun0003 }
 204:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 16;
            var3 = var9[var2];
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.4lTDZm;
            var8 = var3.bind(var4)(var2);
            _fun0003_ip = 328; continue _fun0003;
 261:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var4 = var13[var2];
            var4 = var3.bind(var5)(var4);
            var9 = var4.intl;
            var4 = var9.formatToPlainString;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.eE3oen;
            var2 = {};
            var13 = var12.length;
            var2['count'] = var13;
            var8 = var4.bind(var9)(var3, var2);
 328:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['label'] = var8;
            var2['onClose'] = var6;
            var8 = var4.bind(var5)(var3, var2);
            if(!(var1 != var12)) { _fun0003_ip = 550; continue _fun0003 }
 376:
            var2 = var12.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0003_ip = 550; continue _fun0003 }
 390:
            var3 = _closure1_slot8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 18;
            var1 = var14[var1];
            var1 = var13.bind(var5)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var4 = true;
            var1['scrollable'] = var4;
            var1['header'] = var8;
            var9 = _closure1_slot8;
            var4 = 20;
            var4 = var14[var4];
            var4 = var13.bind(var5)(var4);
            var6 = var4.BottomSheetFlatList;
            var4 = {};
            var15 = var15.flex;
            var4['style'] = var15;
            var15 = {};
            var15['paddingBottom'] = var16;
            var4['contentContainerStyle'] = var15;
            var4['data'] = var12;
            var12 = function renderItem(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var4 = _closure1_slot8;
                var3 = _closure1_slot11;
                var2 = {};
                var2['item'] = var1;
                var5 = _closure2_slot0;
                var2['onSelectMutualGuild'] = var5;
                var1 = _closure2_slot2;
                var2['user'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4['renderItem'] = var12;
            var12 = 9;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.FormDivider;
            var4['ItemSeparatorComponent'] = var12;
            var11 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.guild;
                var1 = var1.id;
                return var1;
            };
            var4['keyExtractor'] = var11;
            var4 = var9.bind(var5)(var6, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 689; continue _fun0003;
 550:
            var4 = _closure1_slot9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 18;
            var2 = var14[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.ActionSheet;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var7 = 19;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['source'] = var10;
            var10 = 16;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.zjVh8v;
            var10 = var11.bind(var12)(var10);
            var7['body'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 689:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();