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
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function WebhookItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var9 = var2.avatar;
            var _closure2_slot0 = var9;
            var15 = var2.channel;
            var _closure2_slot1 = var15;
            var14 = var2.guildId;
            var _closure2_slot2 = var14;
            var6 = var2.name;
            var _closure2_slot3 = var6;
            var10 = var2.token;
            var _closure2_slot4 = var10;
            var13 = var2.user;
            var16 = var2.webhookId;
            var _closure2_slot5 = var16;
            var17 = var2.webhookType;
            var _closure2_slot6 = var17;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var2 = var12[var2];
            var4 = undefined;
            var3 = var8.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot7 = var2;
            var7 = _closure1_slot9;
            var5 = var7.useCallback;
            var3 = new Array(8);
            var3[0] = var16;
            var3[1] = var17;
            var3[2] = var9;
            var3[3] = var15;
            var3[4] = var14;
            var3[5] = var6;
            var3[6] = var10;
            var3[7] = var2;
            var2 = function() {
                var4 = _closure2_slot7;
                var3 = var4.push;
                var1 = _closure1_slot19;
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
            var5 = var5.bind(var7)(var2, var3);
            var7 = _closure1_slot9;
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var9;
            var1 = function() {
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 18;
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
                var6 = _closure1_slot20;
                var1['discriminator'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot23;
            var1 = 19;
            var1 = var12[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var9 = _closure1_slot23;
            var7 = 20;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Avatar;
            var7 = {};
            var7['source'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var7 = true;
            var1['arrow'] = var7;
            var1['label'] = var6;
            var6 = null;
            if(!(var6 == var13)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 21;
            var8 = var14[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6["7mv59O"];
            var6 = {};
            var12 = _closure1_slot1;
            var10 = 22;
            var10 = var14[var10];
            var12 = var12.bind(var4)(var10);
            var10 = var12.extractTimestamp;
            var10 = var10.bind(var12)(var16);
            var6['timestamp'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 21;
            var9 = var14[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7["7EcUbr"];
            var7 = {};
            var12 = _closure1_slot1;
            var11 = 22;
            var11 = var14[var11];
            var15 = var12.bind(var4)(var11);
            var11 = var15.extractTimestamp;
            var11 = var11.bind(var15)(var16);
            var7['timestamp'] = var11;
            var11 = 23;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.getUserTag;
            var11 = var11.bind(var12)(var13);
            var7['user'] = var11;
            var6 = var9.bind(var10)(var8, var7);
case 8:
            var1['subLabel'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
        var3 = 24;
        var7 = var8[var3];
        var4 = undefined;
        var11 = var6.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot16;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot16;
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
        var9 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function() {
            var3 = _closure1_slot10;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var8)(var3, var2);
        var3 = _closure1_slot23;
        var2 = _closure1_slot30;
        var1 = {};
        var14 = var1;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var5 = 'user';
        var1[4] = var7;
        var5 = 'channel';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function CreateWebhookButton(arg1) {
        var2 = arg1;
        var9 = var2.guild;
        var _closure2_slot0 = var9;
        var2 = var2.channel;
        var _closure2_slot1 = var2;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 17;
        var2 = var11[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useNavigation;
        var6 = var2.bind(var3)();
        var _closure2_slot2 = var6;
        var2 = 24;
        var2 = var11[var2];
        var7 = var10.bind(var4)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot13;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = _closure1_slot15;
        var3[1] = var2;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 == var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var6 = _closure1_slot13;
                var5 = var6.getChannels;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var6 = var5.bind(var6)(var4);
                var4 = _closure1_slot11;
                var9 = var6[var4];
                var5 = new Array(0);
                var8 = 0;
                var10 = var5;
                var8 = arraySpread(var10, var9, var8);
                var3 = _closure1_slot12;
                var9 = var6[var3];
                var10 = var5;
                var3 = arraySpread(var10, var9, var8);
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.channel;
                    var3 = _closure1_slot15;
                    var2 = var3.can;
                    var1 = _closure1_slot21;
                    var1 = var1.MANAGE_WEBHOOKS;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var3.channel;
case 13:
                return var2;
case 11:
                var1 = _closure2_slot1;
                return var1;
            }
        };
        var7 = var5.bind(var7)(var3, var2);
        var _closure2_slot3 = var7;
        var5 = _closure1_slot9;
        var3 = var5.useCallback;
        var2 = _closure1_slot8;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var2 = _closure2_slot3;
                    var10 = null;
                    if(!(var10 != var2)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 25;
                    var2 = var5[var2];
                    var8 = undefined;
                    var6 = var4.bind(var8)(var2);
                    var5 = var6.create;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=84);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    if(!(var10 != var2)) { _fun0005_ip = 17; continue _fun0005 }
case 23:
                    var6 = _closure2_slot2;
                    var5 = var6.push;
                    var3 = _closure1_slot19;
                    var4 = var3.EDIT_WEBHOOK;
                    var3 = {};
                    var9 = var2.id;
                    var3['webhookId'] = var9;
                    var9 = var2.type;
                    var3['webhookType'] = var9;
                    var9 = var2.avatar;
                    var10 = var10 != var9;
                    var8 = undefined;
                    if(!var10) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var8 = var9;
case 24:
                    var3['avatar'] = var8;
                    var8 = var2.name;
                    var3['name'] = var8;
                    var8 = _closure2_slot3;
                    var3['channel'] = var8;
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var3['guildId'] = var7;
                    var7 = var2.token;
                    var3['token'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 17:
                    var3 = undefined;
                    return var3;
case 21:
                    return var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = new Array(3);
        var1[0] = var7;
        var9 = var9.id;
        var1[1] = var9;
        var1[2] = var6;
        var5 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot23;
        var6 = 26;
        var1 = var11[var6];
        var1 = var10.bind(var4)(var1);
        var2 = var1.RowButton;
        var1 = {};
        var9 = _closure1_slot23;
        var6 = var11[var6];
        var6 = var10.bind(var4)(var6);
        var6 = var6.RowButton;
        var8 = var6.Icon;
        var6 = {};
        var12 = 27;
        var12 = var11[var12];
        var12 = var10.bind(var4)(var12);
        var12 = var12.WebhookPlusIcon;
        var6['IconComponent'] = var12;
        var6 = var9.bind(var4)(var8, var6);
        var1['icon'] = var6;
        var6 = 21;
        var8 = var11[var6];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var11[var6];
        var6 = var10.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.nrO/HH;
        var6 = var8.bind(var9)(var6);
        var1['label'] = var6;
        var6 = null;
        var6 = var6 == var7;
        var1['disabled'] = var6;
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot32 = var1;
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
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot9 = var4;
    var7 = 7;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = var9;
    var8 = var8.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = var8;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot17 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.HelpdeskArticles;
    var _closure1_slot18 = var8;
    var8 = var7.ChannelSettingsSections;
    var _closure1_slot19 = var8;
    var8 = var7.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot20 = var8;
    var8 = var7.Permissions;
    var _closure1_slot21 = var8;
    var7 = var7.WebhookTypes;
    var _closure1_slot22 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot23 = var8;
    var8 = var7.Fragment;
    var _closure1_slot24 = var8;
    var7 = var7.jsxs;
    var _closure1_slot25 = var7;
    var7 = 15;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var11 = 16;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var7['form'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.TABLE_ROW_PADDING;
    var10['paddingHorizontal'] = var13;
    var7['content'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var10['marginBottom'] = var11;
    var7['hint'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function WebhooksOverview() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot29;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 14; continue _fun0006;
case 26:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 14:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var2 = var1.webhookType;
                var1 = _closure1_slot22;
                var1 = var1.CHANNEL_FOLLOWER;
                if(!(var2 !== var1)) { _fun0007_ip = 28; continue _fun0007 }
case 10:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 21;
                var3 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1["3hX7G+"];
                var1 = {};
                var7 = _closure1_slot1;
                var5 = 28;
                var5 = var9[var5];
                var8 = var7.bind(var8)(var5);
                var7 = var8.getArticleURL;
                var5 = _closure1_slot18;
                var5 = var5.WEBHOOKS_INTRODUCTION;
                var5 = var7.bind(var8)(var5);
                var1['articleURL'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun0007_ip = 29; continue _fun0007;
case 28:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 21;
                var4 = var10[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var2 = var10[var2];
                var2 = var3.bind(var9)(var2);
                var2 = var2.t;
                var3 = var2["5u+aV1"];
                var2 = {};
                var8 = _closure1_slot1;
                var7 = 28;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.getArticleURL;
                var6 = _closure1_slot18;
                var6 = var6.CHANNEL_FOLLOWING;
                var6 = var7.bind(var8)(var6);
                var2['helpdeskArticle'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 29:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var14 = this;
                var1 = var14.props;
                var3 = var1.webhooks;
                var12 = var1.webhookType;
                var _closure3_slot0 = var12;
                var1 = null;
                var13 = var3;
                if(!(var1 != var12)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var13 = var2.bind(var3)(var1);
case 30:
                var1 = var14.getHelpText;
                var8 = var1.bind(var14)();
                var4 = _closure1_slot25;
                var3 = _closure1_slot24;
                var2 = {};
                var7 = _closure1_slot23;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 29;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.Text;
                var5 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var5['children'] = var8;
                var6 = var7.bind(var1)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = _closure1_slot22;
                var6 = var6.INCOMING;
                var6 = var12 === var6;
                if(!var6) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var10 = _closure1_slot23;
                var8 = _closure1_slot32;
                var7 = {};
                var15 = var14.props;
                var15 = var15.guild;
                var7['guild'] = var15;
                var14 = var14.props;
                var14 = var14.channel;
                var7['channel'] = var14;
                var6 = var10.bind(var1)(var8, var7);
case 32:
                var5[1] = var6;
                var7 = var13.length;
                var6 = 0;
                if(!(var6 !== var7)) { _fun0008_ip = 7; continue _fun0008 }
case 34:
                var8 = _closure1_slot23;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 31;
                var6 = var10[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var10 = true;
                var6['hasIcons'] = var10;
                var10 = var13.map;
                var9 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                        var4 = _closure1_slot23;
                        var3 = _closure1_slot31;
                        var2 = {};
                        var2['webhookId'] = var5;
                        var2['webhookType'] = var1;
                        var1 = null;
                        var13 = var1 != var12;
                        var1 = undefined;
                        var11 = undefined;
                        if(!var13) { _fun0009_ip = 20; continue _fun0009 }
case 35:
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
                var9 = var10.bind(var13)(var9);
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                _fun0008_ip = 36; continue _fun0008;
case 7:
                var9 = _closure1_slot23;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 20;
                var7 = var14[var7];
                var7 = var13.bind(var1)(var7);
                var8 = var7.EmptyState;
                var7 = {};
                var10 = 30;
                var10 = var14[var10];
                var10 = var13.bind(var1)(var10);
                var10 = var10.WebhookEmpty;
                var7['Illustration'] = var10;
                var10 = _closure1_slot22;
                var10 = var10.CHANNEL_FOLLOWER;
                if(!(var12 !== var10)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 21;
                var12 = var15[var10];
                var12 = var14.bind(var1)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var15[var10];
                var10 = var14.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10["4JAVI+"];
                var10 = var12.bind(var13)(var10);
                _fun0008_ip = 39; continue _fun0008;
case 37:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 21;
                var12 = var15[var11];
                var12 = var14.bind(var1)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.dkHRkE;
                var10 = var12.bind(var13)(var11);
case 39:
                var7['title'] = var10;
                var6 = var9.bind(var1)(var8, var7);
case 36:
                var5[2] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var15 = this;
            var2 = _closure1_slot26;
            var1 = var15.context;
            var4 = undefined;
            var14 = var2.bind(var4)(var1);
            var3 = _closure1_slot25;
            var2 = _closure1_slot24;
            var1 = {};
            var10 = _closure1_slot23;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 32;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.Form;
            var5 = {};
            var11 = var14.form;
            var5['style'] = var11;
            var11 = var15.props;
            var11 = var11.contentContainerStyle;
            var5['contentContainerStyle'] = var11;
            var13 = _closure1_slot23;
            var11 = 33;
            var11 = var9[var11];
            var11 = var7.bind(var4)(var11);
            var12 = var11.Stack;
            var11 = {};
            var17 = _closure1_slot1;
            var16 = 16;
            var16 = var9[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.space;
            var16 = var16.PX_24;
            var11['spacing'] = var16;
            var14 = var14.content;
            var11['style'] = var14;
            var14 = var15.renderWebhooks;
            var14 = var14.bind(var15)();
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5['children'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot23;
            var6 = 34;
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
    var _closure1_slot27 = var7;
    var4 = 35;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = new Array(0);
    var _closure1_slot28 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedWebhooksOverview(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var13 = var1.channelId;
            var _closure2_slot0 = var13;
            var14 = var1.guildId;
            var _closure2_slot1 = var14;
            var7 = var1.contentContainerStyle;
            var6 = var1.webhookType;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 24;
            var8 = var1[var11];
            var12 = var4.bind(var5)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var12)(var9, var8);
            var _closure2_slot2 = var9;
            var1 = var1[var11];
            var10 = var4.bind(var5)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot14;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot14;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot2;
                    var5 = null;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0011_ip = 9; continue _fun0011 }
case 10:
                    var6 = _closure2_slot2;
                    var1 = var6.guild_id;
case 9:
                    if(!(var5 == var1)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                    var1 = _closure2_slot1;
case 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var4, var1);
            var1 = null;
            var8 = var1 == var10;
            var4 = undefined;
            if(var8) { _fun0010_ip = 33; continue _fun0010 }
case 42:
            var4 = var10.id;
case 33:
            if(!(var1 != var4)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var14 = var4;
case 43:
            _closure2_slot3 = var14;
            var8 = var1 == var9;
            var4 = undefined;
            if(var8) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var4 = var9.id;
case 45:
            if(!(var1 != var4)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var13 = var4;
case 47:
            _closure2_slot4 = var13;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var12 = var8.bind(var5)(var4);
            var11 = var12.useStateFromStoresArray;
            var4 = _closure1_slot17;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0012_ip = 49; continue _fun0012 }
case 12:
                    var1 = _closure2_slot4;
                    if(!(var3 == var1)) { _fun0012_ip = 50; continue _fun0012 }
case 49:
                    var1 = _closure2_slot3;
                    if(!(var3 == var1)) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                    var1 = _closure1_slot28;
                    _fun0012_ip = 53; continue _fun0012;
case 51:
                    var5 = _closure1_slot17;
                    var4 = var5.getWebhooksForGuild;
                    var3 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3);
case 53:
                    _fun0012_ip = 54; continue _fun0012;
case 50:
                    var5 = _closure1_slot17;
                    var4 = var5.getWebhooksForChannel;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
case 54:
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var8, var4);
            var12 = _closure1_slot9;
            var11 = var12.useEffect;
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var13;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0013_ip = 49; continue _fun0013 }
case 12:
                    var2 = _closure2_slot4;
                    if(!(var3 == var2)) { _fun0013_ip = 55; continue _fun0013 }
case 49:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0013_ip = 56; continue _fun0013 }
case 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchForGuild;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2);
                    _fun0013_ip = 56; continue _fun0013;
case 55:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchForChannel;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2, var1);
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var11.bind(var12)(var3, var4);
            var3 = var1 != var10;
            var1 = null;
            if(!var3) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var4 = _closure1_slot23;
            var3 = _closure1_slot27;
            var2 = {};
            var2['guild'] = var10;
            var2['channel'] = var9;
            var2['webhooks'] = var8;
            var2['contentContainerStyle'] = var7;
            var2['webhookType'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 57:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();