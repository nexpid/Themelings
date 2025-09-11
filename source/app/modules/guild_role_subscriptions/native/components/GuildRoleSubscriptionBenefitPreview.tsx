// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function BaseBenefitRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.emoji;
            var11 = var1.children;
            var13 = var1.contentStyle;
            var17 = var1.guildId;
            var8 = var1.isInteractive;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 36:
            var8 = true;
 38:
            var1 = _closure1_slot7;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var9 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var10 = var12.emojiContainer;
            var5['style'] = var10;
            var15 = _closure1_slot5;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 5;
            var10 = var18[var10];
            var14 = var14.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var17;
            var10['id'] = var16;
            var10 = var15.bind(var4)(var14, var10);
            var5['children'] = var10;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var10 = _closure1_slot5;
            var9 = _closure1_slot3;
            var6 = {};
            var14 = var12.benefitColumn;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var6['style'] = var12;
            var6['children'] = var11;
            var6 = var10.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = true;
            var6 = var6 === var8;
            if(!var6) { _fun0001_ip = 249; continue _fun0001 }
 201:
            var9 = _closure1_slot5;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 6;
            var7 = var12[var7];
            var8 = var11.bind(var4)(var7);
            var7 = {};
            var10 = 7;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var7['source'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 249:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function DescriptiveBenefitRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.benefit;
            var7 = var1.children;
            var8 = var1.guildId;
            var5 = var1.isInteractive;
            var2 = _closure1_slot7;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var2 = var3.description;
            var10 = null;
            var2 = var10 != var2;
            var6 = null;
            if(!var2) { _fun0002_ip = 124; continue _fun0002 }
 54:
            var11 = _closure1_slot5;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 8;
            var2 = var13[var2];
            var2 = var9.bind(var4)(var2);
            var9 = var2.Text;
            var2 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            var12 = var12.benefitDescription;
            var2['style'] = var12;
            var12 = var3.description;
            var2['children'] = var12;
            var6 = var11.bind(var4)(var9, var2);
 124:
            var9 = var3.emoji_id;
            if(!(var10 == var9)) { _fun0002_ip = 194; continue _fun0002 }
 134:
            var2 = var3.emoji_name;
            var10 = var10 != var2;
            var2 = '';
            if(!var10) { _fun0002_ip = 191; continue _fun0002 }
 151:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.convertSurrogateToName;
            var10 = var3.emoji_name;
            var3 = false;
            var2 = var11.bind(var12)(var10, var3);
 191:
            var9 = var2;
 194:
            var3 = _closure1_slot6;
            var2 = _closure1_slot8;
            var1 = {};
            var1['emoji'] = var9;
            var1['guildId'] = var8;
            var1['isInteractive'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function ChannelBenefitRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var8 = var1.benefit;
            var7 = var1.guildId;
            var6 = var1.isInteractive;
            var1 = _closure1_slot7;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useChannelWithTemplateFallback;
            var1 = var8.ref_id;
            var13 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 != var13;
            var12 = null;
            if(!var3) { _fun0003_ip = 112; continue _fun0003 }
 81:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 11;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getChannelIcon;
            var12 = var3.bind(var4)(var13);
 112:
            if(!(var1 != var13)) { _fun0003_ip = 325; continue _fun0003 }
 119:
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var1 = {};
            var1['benefit'] = var8;
            var1['guildId'] = var7;
            var1['isInteractive'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var17.channelRow;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var15 = 6;
            var9 = var14[var15];
            var10 = var16.bind(var5)(var9);
            var9 = {};
            var17 = var17.channelIcon;
            var9['style'] = var17;
            var15 = var14[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.Sizes;
            var15 = var15.CUSTOM;
            var9['size'] = var15;
            var9['source'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var10 = 8;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var13 = var13.name;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 452; continue _fun0003;
 325:
            var4 = _closure1_slot5;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var6 = 12;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.bz1PZW;
            var9 = var7.bind(var8)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '[';
            var6 = ']';
            var6 = var8.bind(var7)(var9, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 452:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function IntangibleBenefitRow(arg1) {
        var1 = arg1;
        var8 = var1.benefit;
        var6 = var1.guildId;
        var5 = var1.isInteractive;
        var4 = _closure1_slot5;
        var3 = _closure1_slot9;
        var2 = {};
        var2['benefit'] = var8;
        var2['guildId'] = var6;
        var2['isInteractive'] = var5;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 8;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        var8 = var8.name;
        var5['children'] = var8;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function EmojiBenefitRow(arg1) {
        var1 = arg1;
        var14 = var1.benefit;
        var6 = var1.guildId;
        var5 = var1.isInteractive;
        var1 = _closure1_slot7;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot8;
        var1 = {};
        var7 = var14.id;
        var1['emoji'] = var7;
        var1['guildId'] = var6;
        var6 = var9.emojiRow;
        var1['contentStyle'] = var6;
        var1['isInteractive'] = var5;
        var12 = _closure1_slot5;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 8;
        var5 = var10[var6];
        var5 = var7.bind(var4)(var5);
        var11 = var5.Text;
        var5 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        var13 = var9.emojiColons;
        var5['style'] = var13;
        var11 = var12.bind(var4)(var11, var5);
        var5 = new Array(3);
        var5[0] = var11;
        var13 = _closure1_slot5;
        var11 = var10[var6];
        var11 = var7.bind(var4)(var11);
        var12 = var11.Text;
        var11 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        var14 = var14.name;
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var5[1] = var11;
        var8 = _closure1_slot5;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        var9 = var9.emojiColons;
        var6['style'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'justifyContent': 'flex-start'};
    var4['container'] = var9;
    var9 = {'width': 24, 'height': 24, 'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center', 'marginEnd': 16};
    var4['emojiContainer'] = var9;
    var9 = {'flexDirection': 'column', 'flexGrow': 1, 'flex': 1, 'alignItems': 'flex-start', 'justifyContent': 'center'};
    var4['benefitColumn'] = var9;
    var9 = {'flex': 1, 'marginTop': 2};
    var4['benefitDescription'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['channelRow'] = var9;
    var9 = {'width': 16, 'height': 16, 'marginEnd': 8};
    var4['channelIcon'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
    var4['emojiRow'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var4['emojiColons'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildRoleSubscriptionBenefitPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var7 = var1.benefit;
            var6 = var1.guildId;
            var2 = var1.isInteractive;
            var1 = 'roles';
            var1 = var1 in var7;
            if(var1) { _fun0004_ip = 122; continue _fun0004 }
 34:
            var4 = var7.ref_type;
            var1 = _closure1_slot4;
            var1 = var1.CHANNEL;
            if(!(var4 !== var1)) { _fun0004_ip = 88; continue _fun0004 }
 54:
            var8 = _closure1_slot5;
            var5 = _closure1_slot11;
            var4 = {};
            var4['benefit'] = var7;
            var4['guildId'] = var6;
            var4['isInteractive'] = var2;
            var1 = undefined;
            var1 = var8.bind(var1)(var5, var4);
            _fun0004_ip = 120; continue _fun0004;
 88:
            var9 = _closure1_slot5;
            var8 = _closure1_slot10;
            var5 = {};
            var5['benefit'] = var7;
            var5['guildId'] = var6;
            var5['isInteractive'] = var2;
            var4 = undefined;
            var1 = var9.bind(var4)(var8, var5);
 120:
            _fun0004_ip = 154; continue _fun0004;
 122:
            var5 = _closure1_slot5;
            var4 = _closure1_slot12;
            var3 = {};
            var3['benefit'] = var7;
            var3['guildId'] = var6;
            var3['isInteractive'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 154:
            return var1;
        }
    };
    var3['GuildRoleSubscriptionBenefitPreview'] = var2;
    return var1;
})();