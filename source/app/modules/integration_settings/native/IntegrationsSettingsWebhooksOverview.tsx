// app/modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function WebhookItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = var2.avatar;
            var _closure2_slot0 = var7;
            var15 = var2.channel;
            var _closure2_slot1 = var15;
            var11 = var2.guildId;
            var _closure2_slot2 = var11;
            var12 = var2.name;
            var _closure2_slot3 = var12;
            var10 = var2.token;
            var _closure2_slot4 = var10;
            var19 = var2.user;
            var9 = var2.webhookId;
            var _closure2_slot5 = var9;
            var16 = var2.webhookType;
            var _closure2_slot6 = var16;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var2 = var13[var2];
            var4 = undefined;
            var3 = var14.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot7 = var2;
            var8 = _closure1_slot8;
            var5 = var8.useCallback;
            var3 = new Array(8);
            var3[0] = var9;
            var3[1] = var16;
            var3[2] = var7;
            var3[3] = var15;
            var3[4] = var11;
            var3[5] = var12;
            var3[6] = var10;
            var3[7] = var2;
            var2 = function() {
                var4 = _closure2_slot7;
                var3 = var4.push;
                var1 = _closure1_slot14;
                var2 = var1.EDIT_WEBHOOK;
                var1 = {};
                var6 = _closure2_slot5;
                var1['webhookId'] = var6;
                var6 = _closure2_slot6;
                var1['webhookType'] = var6;
                var6 = _closure2_slot0;
                var1['avatar'] = var6;
                var6 = _closure2_slot3;
                var1['name'] = var6;
                var6 = _closure2_slot1;
                var1['channel'] = var6;
                var6 = _closure2_slot2;
                var1['guildId'] = var6;
                var5 = _closure2_slot4;
                var1['token'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var11 = var5.bind(var8)(var2, var3);
            var5 = _closure1_slot8;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var7;
            var1 = function() {
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var2 = var7[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var2);
                var2 = var3.makeSource;
                var1 = var7[var1];
                var5 = var5.bind(var4)(var1);
                var4 = var5.getUserAvatarURL;
                var1 = {};
                var8 = _closure2_slot5;
                var1['id'] = var8;
                var7 = _closure2_slot0;
                var1['avatar'] = var7;
                var6 = _closure1_slot15;
                var1['discriminator'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = {};
            var8 = _closure1_slot17;
            var10 = 17;
            var5 = var13[var10];
            var5 = var14.bind(var4)(var5);
            var7 = var5.FormRow;
            var5 = {};
            var17 = _closure1_slot17;
            var16 = _closure1_slot1;
            var15 = 18;
            var15 = var13[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['source'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var5['leading'] = var15;
            var15 = _closure1_slot17;
            var13 = var13[var10];
            var13 = var14.bind(var4)(var13);
            var13 = var13.FormRow;
            var14 = var13.Arrow;
            var13 = {};
            var13 = var15.bind(var4)(var14, var13);
            var5['trailing'] = var13;
            var5['label'] = var12;
            var12 = null;
            if(!(var12 == var19)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 19;
            var14 = var18[var12];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.formatToPlainString;
            var12 = var18[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.7mv59P;
            var12 = {};
            var17 = _closure1_slot1;
            var16 = 20;
            var16 = var18[var16];
            var17 = var17.bind(var4)(var16);
            var16 = var17.extractTimestamp;
            var16 = var16.bind(var17)(var9);
            var12['timestamp'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 19;
            var15 = var20[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var20[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.7EcUbm;
            var13 = {};
            var18 = _closure1_slot1;
            var17 = 20;
            var17 = var20[var17];
            var21 = var18.bind(var4)(var17);
            var17 = var21.extractTimestamp;
            var17 = var17.bind(var21)(var9);
            var13['timestamp'] = var17;
            var17 = 21;
            var17 = var20[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.getUserTag;
            var17 = var17.bind(var18)(var19);
            var13['user'] = var17;
            var12 = var15.bind(var16)(var14, var13);
case 8:
            var5['subLabel'] = var12;
            var5['onPress'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormDivider;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6, var9);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ConnectedWebhookItem(arg1) {
        var4 = arg1;
        var1 = var4.channelId;
        var _closure2_slot0 = var1;
        var1 = var4.user;
        var _closure2_slot1 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['channelId'] = var1;
        var3['user'] = var1;
        var14 = {};
        var13 = var4;
        var12 = var3;
        var5 = copyDataProperties(var14, var13, var12);
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 22;
        var7 = var8[var3];
        var4 = undefined;
        var11 = var6.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot11;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot11;
                var2 = var3.getUser;
                var5 = _closure2_slot1;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure2_slot1;
                var1 = var4.id;
case 9:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var7 = var10.bind(var11)(var9, var7);
        var3 = var8[var3];
        var8 = var6.bind(var4)(var3);
        var6 = var8.useStateFromStores;
        var9 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var8)(var3, var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot24;
        var1 = {};
        var14 = var1;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var5 = 'user';
        var1[var5] = var7;
        var5 = 'channel';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Platform;
    var7 = 7;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.HelpdeskArticles;
    var _closure1_slot13 = var8;
    var8 = var7.ChannelSettingsSections;
    var _closure1_slot14 = var8;
    var8 = var7.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot15 = var8;
    var7 = var7.WebhookTypes;
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot17 = var8;
    var8 = var7.Fragment;
    var _closure1_slot18 = var8;
    var7 = var7.jsxs;
    var _closure1_slot19 = var7;
    var7 = 13;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var11 = 14;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var11 = 16;
    var10['paddingTop'] = var11;
    var7['form'] = var10;
    var10 = {'paddingHorizontal': 16, 'marginBottom': 16};
    var7['hint'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot20 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function WebhooksOverview() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getHelpText';
        var5['key'] = var1;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var2 = var1.webhookType;
                var1 = _closure1_slot16;
                var1 = var1.CHANNEL_FOLLOWER;
                if(!(var2 !== var1)) { _fun0005_ip = 14; continue _fun0005 }
case 10:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 19;
                var3 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.3hX7Gx;
                var1 = {};
                var7 = _closure1_slot1;
                var5 = 23;
                var5 = var9[var5];
                var8 = var7.bind(var8)(var5);
                var7 = var8.getArticleURL;
                var5 = _closure1_slot13;
                var5 = var5.WEBHOOKS_INTRODUCTION;
                var5 = var7.bind(var8)(var5);
                var1['articleURL'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun0005_ip = 15; continue _fun0005;
case 14:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 19;
                var4 = var10[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var2 = var10[var2];
                var2 = var3.bind(var9)(var2);
                var2 = var2.t;
                var3 = var2.5u+aV1;
                var2 = {};
                var8 = _closure1_slot1;
                var7 = 23;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.getArticleURL;
                var6 = _closure1_slot13;
                var6 = var6.CHANNEL_FOLLOWING;
                var6 = var7.bind(var8)(var6);
                var2['helpdeskArticle'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 15:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderWebhooks';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2.props;
                var4 = var1.webhooks;
                var13 = var1.webhookType;
                var _closure3_slot0 = var13;
                var1 = null;
                var7 = var4;
                if(!(var1 != var13)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var3 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var3.bind(var4)(var1);
case 16:
                var1 = var2.getHelpText;
                var9 = var1.bind(var2)();
                var2 = var7.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var4 = _closure1_slot17;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 17;
                var1 = var11[var6];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var10 = _closure1_slot17;
                var6 = var11[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.FormHint;
                var6 = {};
                var6['children'] = var9;
                var6 = var10.bind(var3)(var8, var6);
                var1['hint'] = var6;
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var5 = var2.id;
                        var1 = var2.type;
                        var12 = var2.avatar;
                        var10 = var2.name;
                        var9 = var2.user;
                        var7 = var2.token;
                        var6 = var2.guild_id;
                        var8 = var2.channel_id;
                        var4 = _closure1_slot17;
                        var3 = _closure1_slot25;
                        var2 = {};
                        var2['webhookId'] = var5;
                        var2['webhookType'] = var1;
                        var1 = null;
                        var13 = var1 != var12;
                        var1 = undefined;
                        var11 = undefined;
                        if(!var13) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                        var11 = var12;
case 20:
                        var2['avatar'] = var11;
                        var2['name'] = var10;
                        var2['user'] = var9;
                        var2['channelId'] = var8;
                        var2['token'] = var7;
                        var2['guildId'] = var6;
                        var1 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                _fun0006_ip = 22; continue _fun0006;
case 18:
                var5 = _closure1_slot19;
                var4 = _closure1_slot18;
                var3 = {};
                var8 = _closure1_slot17;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 17;
                var6 = var14[var2];
                var2 = undefined;
                var6 = var12.bind(var2)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var6['children'] = var9;
                var7 = var8.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot17;
                var8 = _closure1_slot1;
                var7 = 24;
                var7 = var14[var7];
                var8 = var8.bind(var2)(var7);
                var7 = {};
                var10 = 25;
                var10 = var14[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.WebhookEmpty;
                var7['Illustration'] = var10;
                var10 = _closure1_slot16;
                var10 = var10.CHANNEL_FOLLOWER;
                if(!(var13 !== var10)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 19;
                var12 = var16[var10];
                var12 = var15.bind(var2)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var10 = var16[var10];
                var10 = var15.bind(var2)(var10);
                var10 = var10.t;
                var10 = var10.4JAVIy;
                var10 = var12.bind(var14)(var10);
                _fun0006_ip = 25; continue _fun0006;
case 23:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 19;
                var14 = var17[var12];
                var14 = var16.bind(var2)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var16.bind(var2)(var12);
                var12 = var12.t;
                var12 = var12.dkHRkJ;
                var10 = var14.bind(var15)(var12);
case 25:
                var7['title'] = var10;
                var10 = _closure1_slot16;
                var12 = var10.CHANNEL_FOLLOWER;
                var10 = undefined;
                if(!(var13 !== var12)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 19;
                var12 = var15[var11];
                var12 = var14.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var2)(var11);
                var11 = var11.t;
                var11 = var11.Gg3fUV;
                var10 = var12.bind(var13)(var11);
case 26:
                var7['body'] = var10;
                var7 = var9.bind(var2)(var8, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var1 = var5.bind(var2)(var4, var3);
case 22:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var12 = this;
            var2 = _closure1_slot20;
            var1 = var12.context;
            var4 = undefined;
            var11 = var2.bind(var4)(var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = {};
            var10 = _closure1_slot17;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 17;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.Form;
            var5 = {};
            var11 = var11.form;
            var5['style'] = var11;
            var11 = var12.props;
            var11 = var11.contentContainerStyle;
            var5['contentContainerStyle'] = var11;
            var11 = var12.renderWebhooks;
            var11 = var11.bind(var12)();
            var5['children'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot17;
            var6 = 26;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot21 = var7;
    var4 = 27;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = new Array(0);
    var _closure1_slot22 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedWebhooksOverview(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var _closure2_slot0 = var8;
            var14 = var1.guildId;
            var _closure2_slot1 = var14;
            var10 = var1.contentContainerStyle;
            var9 = var1.webhookType;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 22;
            var4 = var1[var7];
            var13 = var3.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var13)(var11, var4);
            var _closure2_slot2 = var12;
            var1 = var1[var7];
            var11 = var3.bind(var5)(var1);
            var4 = var11.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var6 = _closure2_slot2;
                    var1 = var6.guild_id;
case 28:
                    if(!(var5 == var1)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var1 = _closure2_slot1;
case 30:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var13 = var4.bind(var11)(var3, var1);
            var1 = null;
            var4 = var1 == var13;
            var3 = undefined;
            if(var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var3 = var13.id;
case 32:
            if(!(var1 != var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var14 = var3;
case 34:
            _closure2_slot3 = var14;
            var4 = var1 == var12;
            var3 = undefined;
            if(var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var3 = var12.id;
case 36:
            if(!(var1 != var3)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var8 = var3;
case 38:
            _closure2_slot4 = var8;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var11 = var4.bind(var5)(var3);
            var7 = var11.useStateFromStoresArray;
            var3 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                    var1 = _closure2_slot4;
                    if(!(var3 == var1)) { _fun0010_ip = 42; continue _fun0010 }
case 40:
                    var1 = _closure2_slot3;
                    if(!(var3 == var1)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                    var1 = _closure1_slot22;
                    _fun0010_ip = 45; continue _fun0010;
case 43:
                    var5 = _closure1_slot12;
                    var4 = var5.getWebhooksForGuild;
                    var3 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3);
case 45:
                    _fun0010_ip = 46; continue _fun0010;
case 42:
                    var5 = _closure1_slot12;
                    var4 = var5.getWebhooksForChannel;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
case 46:
                    return var1;
                }
            };
            var11 = var7.bind(var11)(var4, var3);
            var7 = _closure1_slot8;
            var4 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var8;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                    var2 = _closure2_slot4;
                    if(!(var3 == var2)) { _fun0011_ip = 47; continue _fun0011 }
case 40:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0011_ip = 48; continue _fun0011 }
case 44:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchForGuild;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2);
                    _fun0011_ip = 48; continue _fun0011;
case 47:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchForChannel;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2, var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var7)(var2, var3);
            var2 = var1 != var13;
            var1 = null;
            if(!var2) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 29;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot17;
            var7 = _closure1_slot21;
            var6 = {};
            var6['guild'] = var13;
            var6['channel'] = var12;
            var6['webhooks'] = var11;
            var6['contentContainerStyle'] = var10;
            var6['webhookType'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();