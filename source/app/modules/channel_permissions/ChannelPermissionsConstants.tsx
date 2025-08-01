// app/modules/channel_permissions/ChannelPermissionsConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var13 = 0;
    var4 = var10[var13];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot3 = var5;
    var5 = var4.ChannelTypesSets;
    var _closure1_slot4 = var5;
    var5 = var4.HelpdeskArticles;
    var _closure1_slot5 = var5;
    var5 = var4.Permissions;
    var _closure1_slot6 = var5;
    var4 = var4.UserSettingsSections;
    var7 = {};
    var7['EMPTY_STATE'] = var13;
    var4 = 'EMPTY_STATE';
    var7[var13] = var4;
    var12 = 1;
    var7['ADMINISTRATOR'] = var12;
    var4 = 'ADMINISTRATOR';
    var7[var12] = var4;
    var11 = 2;
    var7['ROLE'] = var11;
    var4 = 'ROLE';
    var7[var11] = var4;
    var5 = 3;
    var7['OWNER'] = var5;
    var4 = 'OWNER';
    var7[var5] = var4;
    var6 = 4;
    var7['MEMBER'] = var6;
    var4 = 'MEMBER';
    var7[var6] = var4;
    var6 = 5;
    var7['USER'] = var6;
    var4 = 'USER';
    var7[var6] = var4;
    var8 = 6;
    var7['GUILD'] = var8;
    var4 = 'GUILD';
    var7[var8] = var4;
    var6 = {};
    var6['ROLES'] = var13;
    var4 = 'ROLES';
    var6[var13] = var4;
    var6['MEMBERS'] = var12;
    var4 = 'MEMBERS';
    var6[var12] = var4;
    var6['USERS'] = var11;
    var4 = 'USERS';
    var6[var11] = var4;
    var6['GUILDS'] = var5;
    var4 = 'GUILDS';
    var6[var5] = var4;
    var5 = {};
    var4 = 'settings-page';
    var5['SETTINGS_PAGE'] = var4;
    var4 = 'members-list';
    var5['MEMBERS_LIST'] = var4;
    var4 = 'empty-state';
    var5['EMPTY_STATE'] = var4;
    var4 = 'create-channel';
    var5['CREATE_CHANNEL'] = var4;
    var4 = {};
    var11 = 'basic';
    var4['BASIC'] = var11;
    var11 = 'advanced';
    var4['ADVANCED'] = var11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/channel_permissions/ChannelPermissionsConstants.tsx';
    var8 = var9.bind(var10)(var8);
    var3['RowType'] = var7;
    var3['AudienceSelectorSections'] = var6;
    var6 = 20;
    var3['MEMBER_REQUEST_COUNT'] = var6;
    var6 = 'channelPermissionSettingsAdvancedModeOn';
    var3['ADVANCED_MODE_ON_KEY'] = var6;
    var3['TrackExposureLocations'] = var5;
    var3['SettingMode'] = var4;
    var2 = function getChannelPermissionSpecMap(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var13 = arg3;
            var6 = var11.type;
            var1 = {};
            var2 = _closure1_slot6;
            var3 = var2.VIEW_CHANNEL;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 113; continue _fun0001 }
 54:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 1;
            var7 = var14[var2];
            var9 = undefined;
            var7 = var12.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var2 = var14[var2];
            var2 = var12.bind(var9)(var2);
            var2 = var2.t;
            var2 = var2.W/A4Qk;
            var2 = var7.bind(var8)(var2);
            _fun0001_ip = 170; continue _fun0001;
 113:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 1;
            var8 = var15[var7];
            var12 = undefined;
            var8 = var14.bind(var12)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var15[var7];
            var7 = var14.bind(var12)(var7);
            var7 = var7.t;
            var7 = var7.uV83ys;
            var2 = var8.bind(var9)(var7);
 170:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var7 = var2.GUILD_CATEGORY;
            if(var10) { _fun0001_ip = 268; continue _fun0001 }
 187:
            if(!(var6 !== var7)) { _fun0001_ip = 228; continue _fun0001 }
 191:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var8 = var8[var2];
            var2 = undefined;
            var2 = var9.bind(var2)(var8);
            var2 = var2.t;
            var2 = var2.M2iEy8;
            _fun0001_ip = 263; continue _fun0001;
 228:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 1;
            var9 = var9[var8];
            var8 = undefined;
            var8 = var12.bind(var8)(var9);
            var8 = var8.t;
            var2 = var8.SzosGh;
 263:
            _fun0001_ip = 409; continue _fun0001;
 268:
            if(!(var7 !== var6)) { _fun0001_ip = 374; continue _fun0001 }
 272:
            var7 = _closure1_slot3;
            var7 = var7.GUILD_VOICE;
            if(!(var7 !== var6)) { _fun0001_ip = 337; continue _fun0001 }
 286:
            var7 = _closure1_slot3;
            var7 = var7.GUILD_STAGE_VOICE;
            if(!(var7 !== var6)) { _fun0001_ip = 337; continue _fun0001 }
 300:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.3jG0Bg;
            _fun0001_ip = 409; continue _fun0001;
 337:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.ejL1Wl;
            _fun0001_ip = 409; continue _fun0001;
 374:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.o/vBzs;
 409:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var7 = var2.VIEW_CHANNEL;
            var3['flag'] = var7;
            var1[var4] = var3;
            var3 = var2.MANAGE_CHANNELS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 523; continue _fun0001 }
 464:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 1;
            var7 = var14[var3];
            var9 = undefined;
            var7 = var12.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var14[var3];
            var3 = var12.bind(var9)(var3);
            var3 = var3.t;
            var3 = var3.nAw15O;
            var3 = var7.bind(var8)(var3);
            _fun0001_ip = 580; continue _fun0001;
 523:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 1;
            var8 = var15[var7];
            var12 = undefined;
            var8 = var14.bind(var12)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var15[var7];
            var7 = var14.bind(var12)(var7);
            var7 = var7.t;
            var7 = var7.9qLtWl;
            var3 = var8.bind(var9)(var7);
 580:
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var3 !== var6)) { _fun0001_ip = 740; continue _fun0001 }
 601:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var6)) { _fun0001_ip = 703; continue _fun0001 }
 615:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var3 !== var6)) { _fun0001_ip = 666; continue _fun0001 }
 629:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var7 = var7[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var3.t;
            var3 = var3.ydL28v;
            _fun0001_ip = 775; continue _fun0001;
 666:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.SDX66+;
            _fun0001_ip = 775; continue _fun0001;
 703:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.+gl2nZ;
            _fun0001_ip = 775; continue _fun0001;
 740:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.KJ2JnJ;
 775:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var7 = var3.MANAGE_CHANNELS;
            var2['flag'] = var7;
            var1[var4] = var2;
            var4 = var3.MANAGE_ROLES;
            var2 = var4.toString;
            var9 = var2.bind(var4)();
            var4 = {};
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 1;
            var12 = var2[var8];
            var7 = undefined;
            var12 = var14.bind(var7)(var12);
            var16 = var12.intl;
            var15 = var16.string;
            var12 = var2[var8];
            var12 = var14.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.ICb6am;
            var12 = var15.bind(var16)(var12);
            var4['title'] = var12;
            var12 = _closure1_slot3;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var6)) { _fun0001_ip = 971; continue _fun0001 }
 893:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var6)) { _fun0001_ip = 939; continue _fun0001 }
 907:
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.hOMXOj;
            _fun0001_ip = 1001; continue _fun0001;
 939:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var12 = var15.hcw4m5;
            _fun0001_ip = 1001; continue _fun0001;
 971:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var12 = var15.TyyCMD;
 1001:
            var4['description'] = var12;
            var12 = var3.MANAGE_ROLES;
            var4['flag'] = var12;
            var1[var9] = var4;
            var4 = var3.MANAGE_WEBHOOKS;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var9 = var2[var8];
            var9 = var14.bind(var7)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var2 = var2[var8];
            var2 = var14.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2./ADKmJ;
            var2 = var9.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 1132; continue _fun0001 }
 1100:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.CYBZr6;
            _fun0001_ip = 1162; continue _fun0001;
 1132:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.K5+ZZ2;
 1162:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.MANAGE_WEBHOOKS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var4 = var2.CREATE_INSTANT_INVITE;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var8];
            var12 = var15.bind(var7)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var9 = var9[var8];
            var9 = var15.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.zJrgTE;
            var9 = var12.bind(var14)(var9);
            var3['title'] = var9;
            var9 = _closure1_slot3;
            var9 = var9.GUILD_CATEGORY;
            if(!(var9 !== var6)) { _fun0001_ip = 1365; continue _fun0001 }
 1273:
            var9 = _closure1_slot3;
            var9 = var9.GUILD_VOICE;
            if(!(var9 !== var6)) { _fun0001_ip = 1333; continue _fun0001 }
 1287:
            var9 = _closure1_slot3;
            var9 = var9.GUILD_STAGE_VOICE;
            if(!(var9 !== var6)) { _fun0001_ip = 1333; continue _fun0001 }
 1301:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.q4g2aG;
            _fun0001_ip = 1395; continue _fun0001;
 1333:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var14.bind(var7)(var12);
            var12 = var12.t;
            var9 = var12.lUCs1t;
            _fun0001_ip = 1395; continue _fun0001;
 1365:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var14.bind(var7)(var12);
            var12 = var12.t;
            var9 = var12.3YFAAQ;
 1395:
            var3['description'] = var9;
            var9 = var2.CREATE_INSTANT_INVITE;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.SEND_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var9 = var2.GUILD_THREADS_ONLY;
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            if(var2) { _fun0001_ip = 1580; continue _fun0001 }
 1458:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 1526; continue _fun0001 }
 1472:
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var14.bind(var7)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var2 = var2[var8];
            var2 = var14.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.T32rkJ;
            var2 = var9.bind(var12)(var2);
            _fun0001_ip = 1578; continue _fun0001;
 1526:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var8];
            var12 = var15.bind(var7)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var9 = var9[var8];
            var9 = var15.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.S1VOwc;
            var2 = var12.bind(var14)(var9);
 1578:
            _fun0001_ip = 1634; continue _fun0001;
 1580:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var8];
            var12 = var15.bind(var7)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var9 = var9[var8];
            var9 = var15.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.nJwAHR;
            var2 = var12.bind(var14)(var9);
 1634:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 2037; continue _fun0001 }
 1655:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 1942; continue _fun0001 }
 1672:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 1909; continue _fun0001 }
 1689:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var6)) { _fun0001_ip = 1805; continue _fun0001 }
 1703:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var6)) { _fun0001_ip = 1750; continue _fun0001 }
 1717:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.WQ6zpa;
            _fun0001_ip = 2067; continue _fun0001;
 1750:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 4;
            var9 = var14[var9];
            var14 = var12.bind(var7)(var9);
            var12 = var14.getTextInVoiceSendMessageChannelPermissionText;
            var9 = null;
            var15 = var9 == var13;
            var9 = undefined;
            if(var15) { _fun0001_ip = 1795; continue _fun0001 }
 1787:
            var9 = var13.sendMessagesDisabled;
 1795:
            var2 = var12.bind(var14)(var9);
            _fun0001_ip = 2067; continue _fun0001;
 1805:
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = var18[var8];
            var9 = var12.bind(var7)(var9);
            var15 = var9.intl;
            var14 = var15.format;
            var9 = var18[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var12 = var9.WFwfSE;
            var9 = {};
            var17 = _closure1_slot1;
            var16 = 3;
            var16 = var18[var16];
            var18 = var17.bind(var7)(var16);
            var17 = var18.getArticleURL;
            var16 = _closure1_slot5;
            var16 = var16.ANNOUNCEMENT_CHANNELS;
            var16 = var17.bind(var18)(var16);
            var9['articleURL'] = var16;
            var2 = var14.bind(var15)(var12, var9);
            _fun0001_ip = 2067; continue _fun0001;
 1909:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.LG9VAg;
            _fun0001_ip = 2067; continue _fun0001;
 1942:
            var9 = null;
            if(!(var9 != var13)) { _fun0001_ip = 2004; continue _fun0001 }
 1948:
            var9 = var13.createPostsDisabled;
            if(!var9) { _fun0001_ip = 2004; continue _fun0001 }
 1959:
            var9 = var11.isMediaChannel;
            var9 = var9.bind(var11)();
            if(var9) { _fun0001_ip = 2004; continue _fun0001 }
 1972:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 2;
            var9 = var12[var9];
            var11 = var11.bind(var7)(var9);
            var9 = var11.getForumChannelPermissionText;
            var9 = var9.bind(var11)();
            _fun0001_ip = 2032; continue _fun0001;
 2004:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var9 = var11.LG9VAg;
 2032:
            var2 = var9;
            _fun0001_ip = 2067; continue _fun0001;
 2037:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.IjeLur;
 2067:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.SEND_MESSAGES;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.EMBED_LINKS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.969dEB;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2210; continue _fun0001 }
 2178:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.XFFhAw;
            _fun0001_ip = 2240; continue _fun0001;
 2210:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.7zlUa2;
 2240:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.EMBED_LINKS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.ATTACH_FILES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var3[var8];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.3AS4UF;
            var3 = var9.bind(var11)(var3);
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 2383; continue _fun0001 }
 2351:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.WK9r7O;
            _fun0001_ip = 2413; continue _fun0001;
 2383:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var3 = var9.XREf9v;
 2413:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var9 = var3.ATTACH_FILES;
            var2['flag'] = var9;
            var1[var4] = var2;
            var4 = var3.ADD_REACTIONS;
            var2 = var4.toString;
            var9 = var2.bind(var4)();
            var4 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var15 = var11.intl;
            var14 = var15.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.yEoJAg;
            var11 = var14.bind(var15)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 2602; continue _fun0001 }
 2524:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 2570; continue _fun0001 }
 2538:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var14.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.PVjR1d;
            _fun0001_ip = 2632; continue _fun0001;
 2570:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.xSSbIi;
            _fun0001_ip = 2632; continue _fun0001;
 2602:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.pZT2Zm;
 2632:
            var4['description'] = var11;
            var11 = var3.ADD_REACTIONS;
            var4['flag'] = var11;
            var1[var9] = var4;
            var4 = var3.USE_EXTERNAL_EMOJIS;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.+bxf3N;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2763; continue _fun0001 }
 2731:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Qc5vOj;
            _fun0001_ip = 2793; continue _fun0001;
 2763:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.mWAbKy;
 2793:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.USE_EXTERNAL_EMOJIS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.USE_EXTERNAL_STICKERS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.ERNhYW;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2936; continue _fun0001 }
 2904:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.VF4fZW;
            _fun0001_ip = 2966; continue _fun0001;
 2936:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.39whJy;
 2966:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.USE_EXTERNAL_STICKERS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.MENTION_EVERYONE;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var6 !== var3)) { _fun0001_ip = 3075; continue _fun0001 }
 3021:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var3[var8];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.Y78KGB;
            var3 = var9.bind(var11)(var3);
            _fun0001_ip = 3129; continue _fun0001;
 3075:
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = var9[var8];
            var11 = var14.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var8];
            var9 = var14.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.VDUAHB;
            var3 = var11.bind(var12)(var9);
 3129:
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 3225; continue _fun0001 }
 3147:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var6 !== var3)) { _fun0001_ip = 3193; continue _fun0001 }
 3161:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.6IUSdn;
            _fun0001_ip = 3223; continue _fun0001;
 3193:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var3 = var9.rZn1oK;
 3223:
            _fun0001_ip = 3255; continue _fun0001;
 3225:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var3 = var9.HOhg/P;
 3255:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var9 = var3.MENTION_EVERYONE;
            var2['flag'] = var9;
            var1[var4] = var2;
            var4 = var3.MANAGE_MESSAGES;
            var2 = var4.toString;
            var9 = var2.bind(var4)();
            var4 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var15 = var11.intl;
            var14 = var15.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.6lU9xM;
            var11 = var14.bind(var15)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 3519; continue _fun0001 }
 3369:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_ANNOUNCEMENT;
            if(!(var11 !== var6)) { _fun0001_ip = 3418; continue _fun0001 }
 3383:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var14.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.SeA+Gx;
            _fun0001_ip = 3549; continue _fun0001;
 3418:
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = var20[var8];
            var14 = var15.bind(var7)(var14);
            var17 = var14.intl;
            var16 = var17.format;
            var14 = var20[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var15 = var14.XRxOo6;
            var14 = {};
            var19 = _closure1_slot1;
            var18 = 3;
            var18 = var20[var18];
            var20 = var19.bind(var7)(var18);
            var19 = var20.getArticleURL;
            var18 = _closure1_slot5;
            var18 = var18.ANNOUNCEMENT_CHANNELS;
            var18 = var19.bind(var20)(var18);
            var14['articleURL'] = var18;
            var11 = var16.bind(var17)(var15, var14);
            _fun0001_ip = 3549; continue _fun0001;
 3519:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.5R9nYm;
 3549:
            var4['description'] = var11;
            var11 = var3.MANAGE_MESSAGES;
            var4['flag'] = var11;
            var1[var9] = var4;
            var4 = var3.PIN_MESSAGES;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Y5BI39;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 3680; continue _fun0001 }
 3648:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.0l2EjI;
            _fun0001_ip = 3710; continue _fun0001;
 3680:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.gmbD8/;
 3710:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.PIN_MESSAGES;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.READ_MESSAGE_HISTORY;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var9 = var2.GUILD_THREADS_ONLY;
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = var9[var8];
            var11 = var14.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var8];
            var9 = var14.bind(var7)(var9);
            var9 = var9.t;
            if(var2) { _fun0001_ip = 3828; continue _fun0001 }
 3815:
            var2 = var9.l9ufaW;
            var2 = var11.bind(var12)(var2);
            _fun0001_ip = 3841; continue _fun0001;
 3828:
            var9 = var9.0RQwtr;
            var2 = var11.bind(var12)(var9);
 3841:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 4018; continue _fun0001 }
 3862:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var6)) { _fun0001_ip = 3966; continue _fun0001 }
 3876:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 3934; continue _fun0001 }
 3890:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 3934; continue _fun0001 }
 3904:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.cuMfHx;
            _fun0001_ip = 4048; continue _fun0001;
 3934:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.RqCc7u;
            _fun0001_ip = 4048; continue _fun0001;
 3966:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 4;
            var9 = var12[var9];
            var12 = var11.bind(var7)(var9);
            var11 = var12.getTextInVoiceReadMessageHistoryChannelPermissionText;
            var9 = null;
            var14 = var9 == var13;
            var9 = undefined;
            if(var14) { _fun0001_ip = 4011; continue _fun0001 }
 4003:
            var9 = var13.readMessageHistoryDisabled;
 4011:
            var2 = var11.bind(var12)(var9);
            _fun0001_ip = 4048; continue _fun0001;
 4018:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.cJRv/v;
 4048:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.READ_MESSAGE_HISTORY;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.SEND_TTS_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.mMbwh4;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4191; continue _fun0001 }
 4159:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.CpakGx;
            _fun0001_ip = 4221; continue _fun0001;
 4191:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.b7pc9f;
 4221:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.SEND_TTS_MESSAGES;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.USE_APPLICATION_COMMANDS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.nkoPOj;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4364; continue _fun0001 }
 4332:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.ReG3gI;
            _fun0001_ip = 4394; continue _fun0001;
 4364:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.D+qW0N;
 4394:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.USE_APPLICATION_COMMANDS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.SEND_VOICE_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.WlWSBQ;
            var2 = var9.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4537; continue _fun0001 }
 4505:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.BhEo9f;
            _fun0001_ip = 4567; continue _fun0001;
 4537:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.gavGfn;
 4567:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.SEND_VOICE_MESSAGES;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.SEND_POLLS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var8];
            var9 = var12.bind(var7)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var3[var8];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.UMQ7W1;
            var3 = var9.bind(var11)(var3);
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 4710; continue _fun0001 }
 4678:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.ckKKIC;
            _fun0001_ip = 4740; continue _fun0001;
 4710:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var3 = var9.18Ya7O;
 4740:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var9 = var3.SEND_POLLS;
            var2['flag'] = var9;
            var1[var4] = var2;
            var4 = var3.CONNECT;
            var2 = var4.toString;
            var9 = var2.bind(var4)();
            var4 = {};
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = var2[var8];
            var12 = var11.bind(var7)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var12 = var2[var8];
            var12 = var11.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.S0W8Z2;
            var12 = var13.bind(var14)(var12);
            var4['title'] = var12;
            var12 = _closure1_slot3;
            var12 = var12.GUILD_CATEGORY;
            if(var10) { _fun0001_ip = 5056; continue _fun0001 }
 4853:
            if(!(var12 !== var6)) { _fun0001_ip = 5021; continue _fun0001 }
 4860:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 4986; continue _fun0001 }
 4874:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 4951; continue _fun0001 }
 4888:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 4951; continue _fun0001 }
 4902:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 4951; continue _fun0001 }
 4916:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.HvG8ub;
            _fun0001_ip = 5245; continue _fun0001;
 4951:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var10 = var13.QU/Rw8;
            _fun0001_ip = 5245; continue _fun0001;
 4986:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var10 = var13.G9+QiY;
            _fun0001_ip = 5245; continue _fun0001;
 5021:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var10 = var13.stA0Hh;
            _fun0001_ip = 5245; continue _fun0001;
 5056:
            if(!(var12 !== var6)) { _fun0001_ip = 5215; continue _fun0001 }
 5063:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var6)) { _fun0001_ip = 5183; continue _fun0001 }
 5077:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_TEXT;
            if(!(var12 !== var6)) { _fun0001_ip = 5151; continue _fun0001 }
 5091:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_FORUM;
            if(!(var12 !== var6)) { _fun0001_ip = 5151; continue _fun0001 }
 5105:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_MEDIA;
            if(!(var12 !== var6)) { _fun0001_ip = 5151; continue _fun0001 }
 5119:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.j4AyOz;
            _fun0001_ip = 5245; continue _fun0001;
 5151:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.LsS8xc;
            _fun0001_ip = 5245; continue _fun0001;
 5183:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.SOFNhI;
            _fun0001_ip = 5245; continue _fun0001;
 5215:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.XcrieH;
 5245:
            var4['description'] = var10;
            var10 = var3.CONNECT;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.SPEAK;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.8w1tIS;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 5499; continue _fun0001 }
 5347:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 5467; continue _fun0001 }
 5361:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 5435; continue _fun0001 }
 5375:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 5435; continue _fun0001 }
 5389:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 5435; continue _fun0001 }
 5403:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.568E6e;
            _fun0001_ip = 5529; continue _fun0001;
 5435:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.+VXsJC;
            _fun0001_ip = 5529; continue _fun0001;
 5467:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.a8n74+;
            _fun0001_ip = 5529; continue _fun0001;
 5499:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.iXhS6e;
 5529:
            var4['description'] = var10;
            var10 = var3.SPEAK;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.STREAM;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.FlNoSU;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 5783; continue _fun0001 }
 5631:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 5751; continue _fun0001 }
 5645:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 5751; continue _fun0001 }
 5659:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 5751; continue _fun0001 }
 5673:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 5719; continue _fun0001 }
 5687:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.RY8rIS;
            _fun0001_ip = 5813; continue _fun0001;
 5719:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.swJcNz;
            _fun0001_ip = 5813; continue _fun0001;
 5751:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.AuEQEB;
            _fun0001_ip = 5813; continue _fun0001;
 5783:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.ryG0/P;
 5813:
            var4['description'] = var10;
            var10 = var3.STREAM;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.USE_EMBEDDED_ACTIVITIES;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.rLSGen;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 6004; continue _fun0001 }
 5912:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 5972; continue _fun0001 }
 5926:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 5972; continue _fun0001 }
 5940:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.qinvMT;
            _fun0001_ip = 6034; continue _fun0001;
 5972:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.RyEwlZ;
            _fun0001_ip = 6034; continue _fun0001;
 6004:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.maNzCA;
 6034:
            var4['description'] = var10;
            var10 = var3.USE_EMBEDDED_ACTIVITIES;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.USE_EXTERNAL_APPS;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.3TzAk5;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 6227; continue _fun0001 }
 6135:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 6195; continue _fun0001 }
 6149:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 6195; continue _fun0001 }
 6163:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.czqMLi;
            _fun0001_ip = 6257; continue _fun0001;
 6195:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.qPUPio;
            _fun0001_ip = 6257; continue _fun0001;
 6227:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.bgIY3N;
 6257:
            var4['description'] = var10;
            var10 = var3.USE_EXTERNAL_APPS;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.USE_SOUNDBOARD;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.Bco7ND;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 6609; continue _fun0001 }
 6359:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 6508; continue _fun0001 }
 6376:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 6508; continue _fun0001 }
 6390:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 6508; continue _fun0001 }
 6404:
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = var17[var8];
            var10 = var12.bind(var7)(var10);
            var14 = var10.intl;
            var13 = var14.format;
            var10 = var17[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var12 = var10.GEi6Ym;
            var10 = {};
            var16 = _closure1_slot1;
            var15 = 3;
            var15 = var17[var15];
            var17 = var16.bind(var7)(var15);
            var16 = var17.getArticleURL;
            var15 = _closure1_slot5;
            var15 = var15.SOUNDBOARD;
            var15 = var16.bind(var17)(var15);
            var10['helpCenterArticle'] = var15;
            var10 = var13.bind(var14)(var12, var10);
            _fun0001_ip = 6708; continue _fun0001;
 6508:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = var18[var8];
            var12 = var13.bind(var7)(var12);
            var15 = var12.intl;
            var14 = var15.format;
            var12 = var18[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.6eYqU1;
            var12 = {};
            var17 = _closure1_slot1;
            var16 = 3;
            var16 = var18[var16];
            var18 = var17.bind(var7)(var16);
            var17 = var18.getArticleURL;
            var16 = _closure1_slot5;
            var16 = var16.SOUNDBOARD;
            var16 = var17.bind(var18)(var16);
            var12['helpCenterArticle'] = var16;
            var10 = var14.bind(var15)(var13, var12);
            _fun0001_ip = 6708; continue _fun0001;
 6609:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = var18[var8];
            var12 = var13.bind(var7)(var12);
            var15 = var12.intl;
            var14 = var15.format;
            var12 = var18[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.0kBp//;
            var12 = {};
            var17 = _closure1_slot1;
            var16 = 3;
            var16 = var18[var16];
            var18 = var17.bind(var7)(var16);
            var17 = var18.getArticleURL;
            var16 = _closure1_slot5;
            var16 = var16.SOUNDBOARD;
            var16 = var17.bind(var18)(var16);
            var12['helpCenterArticle'] = var16;
            var10 = var14.bind(var15)(var13, var12);
 6708:
            var4['description'] = var10;
            var10 = var3.USE_SOUNDBOARD;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.USE_EXTERNAL_SOUNDS;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.pwaVJy;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.qDpPtb;
            var4['description'] = var10;
            var10 = var3.USE_EXTERNAL_SOUNDS;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.USE_VAD;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.08zAV1;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 7067; continue _fun0001 }
 6915:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 7035; continue _fun0001 }
 6929:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 7003; continue _fun0001 }
 6943:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 7003; continue _fun0001 }
 6957:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 7003; continue _fun0001 }
 6971:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.s2eihY;
            _fun0001_ip = 7097; continue _fun0001;
 7003:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.3GJwsb;
            _fun0001_ip = 7097; continue _fun0001;
 7035:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.BJKqsb;
            _fun0001_ip = 7097; continue _fun0001;
 7067:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.fUYPl5;
 7097:
            var4['description'] = var10;
            var10 = var3.USE_VAD;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.PRIORITY_SPEAKER;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.BVK71t;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 7466; continue _fun0001 }
 7199:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 7358; continue _fun0001 }
 7216:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 7358; continue _fun0001 }
 7233:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 7358; continue _fun0001 }
 7247:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = var15[var8];
            var10 = var18.bind(var7)(var10);
            var14 = var10.intl;
            var13 = var14.format;
            var10 = var15[var8];
            var10 = var18.bind(var7)(var10);
            var10 = var10.t;
            var12 = var10.Ij0yKS;
            var10 = {};
            var16 = var15[var8];
            var16 = var18.bind(var7)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var8];
            var15 = var18.bind(var7)(var15);
            var15 = var15.t;
            var15 = var15.DkSwJy;
            var15 = var16.bind(var17)(var15);
            var10['keybind'] = var15;
            var10 = var13.bind(var14)(var12, var10);
            _fun0001_ip = 7572; continue _fun0001;
 7358:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = var16[var8];
            var12 = var19.bind(var7)(var12);
            var15 = var12.intl;
            var14 = var15.format;
            var12 = var16[var8];
            var12 = var19.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.4nbjLy;
            var12 = {};
            var17 = var16[var8];
            var17 = var19.bind(var7)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var8];
            var16 = var19.bind(var7)(var16);
            var16 = var16.t;
            var16 = var16.DkSwJy;
            var16 = var17.bind(var18)(var16);
            var12['keybind'] = var16;
            var10 = var14.bind(var15)(var13, var12);
            _fun0001_ip = 7572; continue _fun0001;
 7466:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = var16[var8];
            var12 = var19.bind(var7)(var12);
            var15 = var12.intl;
            var14 = var15.format;
            var12 = var16[var8];
            var12 = var19.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.g5MzOD;
            var12 = {};
            var17 = var16[var8];
            var17 = var19.bind(var7)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var8];
            var16 = var19.bind(var7)(var16);
            var16 = var16.t;
            var16 = var16.DkSwJy;
            var16 = var17.bind(var18)(var16);
            var12['keybind'] = var16;
            var10 = var14.bind(var15)(var13, var12);
 7572:
            var4['description'] = var10;
            var10 = var3.PRIORITY_SPEAKER;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.MUTE_MEMBERS;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.8EI309;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 7826; continue _fun0001 }
 7674:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 7794; continue _fun0001 }
 7688:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 7762; continue _fun0001 }
 7702:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 7762; continue _fun0001 }
 7716:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 7762; continue _fun0001 }
 7730:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.LW5C9P;
            _fun0001_ip = 7856; continue _fun0001;
 7762:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.KYDG2N;
            _fun0001_ip = 7856; continue _fun0001;
 7794:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.EbvdHx;
            _fun0001_ip = 7856; continue _fun0001;
 7826:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.bcuobG;
 7856:
            var4['description'] = var10;
            var10 = var3.MUTE_MEMBERS;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.DEAFEN_MEMBERS;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.9L47Fh;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 8061; continue _fun0001 }
 7955:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 8029; continue _fun0001 }
 7969:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 8029; continue _fun0001 }
 7983:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 8029; continue _fun0001 }
 7997:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.UAdIxs;
            _fun0001_ip = 8091; continue _fun0001;
 8029:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.d+i1nZ;
            _fun0001_ip = 8091; continue _fun0001;
 8061:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.amZ5vr;
 8091:
            var4['description'] = var10;
            var10 = var3.DEAFEN_MEMBERS;
            var4['flag'] = var10;
            var1[var9] = var4;
            var9 = var3.MOVE_MEMBERS;
            var4 = var9.toString;
            var9 = var4.bind(var9)();
            var4 = {};
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var13 = var10.intl;
            var12 = var13.string;
            var10 = var2[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.YtjJPT;
            var10 = var12.bind(var13)(var10);
            var4['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 8345; continue _fun0001 }
 8193:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 8313; continue _fun0001 }
 8207:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_TEXT;
            if(!(var10 !== var6)) { _fun0001_ip = 8281; continue _fun0001 }
 8221:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_FORUM;
            if(!(var10 !== var6)) { _fun0001_ip = 8281; continue _fun0001 }
 8235:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_MEDIA;
            if(!(var10 !== var6)) { _fun0001_ip = 8281; continue _fun0001 }
 8249:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.nSD1am;
            _fun0001_ip = 8375; continue _fun0001;
 8281:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.cbdQy8;
            _fun0001_ip = 8375; continue _fun0001;
 8313:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.bizKz8;
            _fun0001_ip = 8375; continue _fun0001;
 8345:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.XmoyRE;
 8375:
            var4['description'] = var10;
            var10 = var3.MOVE_MEMBERS;
            var4['flag'] = var10;
            var1[var9] = var4;
            var4 = var3.REQUEST_TO_SPEAK;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.5kicT0;
            var2 = var9.bind(var10)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 8506; continue _fun0001 }
 8474:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.uzlYFB;
            _fun0001_ip = 8536; continue _fun0001;
 8506:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.T1lMSk;
 8536:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.REQUEST_TO_SPEAK;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.MANAGE_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var9 = var2.GUILD_THREADS_ONLY;
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            if(var2) { _fun0001_ip = 8725; continue _fun0001 }
 8603:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 8671; continue _fun0001 }
 8617:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.kEqgr6;
            var2 = var9.bind(var10)(var2);
            _fun0001_ip = 8723; continue _fun0001;
 8671:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.QKe7Q0;
            var2 = var10.bind(var11)(var9);
 8723:
            _fun0001_ip = 8779; continue _fun0001;
 8725:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.ossiZG;
            var2 = var10.bind(var11)(var9);
 8779:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 8889; continue _fun0001 }
 8797:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 8857; continue _fun0001 }
 8811:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 8857; continue _fun0001 }
 8825:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.yvan0t;
            _fun0001_ip = 8919; continue _fun0001;
 8857:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.XLi/jI;
            _fun0001_ip = 8919; continue _fun0001;
 8889:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.S31soa;
 8919:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.MANAGE_THREADS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.CREATE_PUBLIC_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.25rKnZ;
            var2 = var9.bind(var10)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9062; continue _fun0001 }
 9030:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.5SDtGB;
            _fun0001_ip = 9092; continue _fun0001;
 9062:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.+M1yLi;
 9092:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.CREATE_PUBLIC_THREADS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.CREATE_PRIVATE_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.QwbTSU;
            var2 = var9.bind(var10)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9235; continue _fun0001 }
 9203:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Chg2zc;
            _fun0001_ip = 9265; continue _fun0001;
 9235:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.hBS/zs;
 9265:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.CREATE_PRIVATE_THREADS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.SEND_MESSAGES_IN_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var9 = var2.GUILD_THREADS_ONLY;
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            if(var2) { _fun0001_ip = 9454; continue _fun0001 }
 9332:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9400; continue _fun0001 }
 9346:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.fTE74u;
            var2 = var9.bind(var10)(var2);
            _fun0001_ip = 9452; continue _fun0001;
 9400:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.5QlVGx;
            var2 = var10.bind(var11)(var9);
 9452:
            _fun0001_ip = 9508; continue _fun0001;
 9454:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var8];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.fqhqWl;
            var2 = var10.bind(var11)(var9);
 9508:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 9618; continue _fun0001 }
 9526:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 9586; continue _fun0001 }
 9540:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 9586; continue _fun0001 }
 9554:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.xHO6MT;
            _fun0001_ip = 9648; continue _fun0001;
 9586:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.XTnrPD;
            _fun0001_ip = 9648; continue _fun0001;
 9618:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.DlIVcH;
 9648:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.SEND_MESSAGES_IN_THREADS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.MANAGE_EVENTS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.HIgA5e;
            var2 = var9.bind(var10)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9791; continue _fun0001 }
 9759:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.4pO/TU;
            _fun0001_ip = 9821; continue _fun0001;
 9791:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.CP2sz8;
 9821:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var9 = var2.MANAGE_EVENTS;
            var3['flag'] = var9;
            var1[var4] = var3;
            var3 = var2.CREATE_EVENTS;
            var2 = var3.toString;
            var3 = var2.bind(var3)();
            var2 = {};
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = var4[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var4 = var4[var8];
            var4 = var11.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.qyjZub;
            var4 = var9.bind(var10)(var4);
            var2['title'] = var4;
            var4 = _closure1_slot3;
            var4 = var4.GUILD_CATEGORY;
            if(!(var6 !== var4)) { _fun0001_ip = 9964; continue _fun0001 }
 9932:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.sPoBLS;
            _fun0001_ip = 9994; continue _fun0001;
 9964:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.t;
            var4 = var6.XpibmJ;
 9994:
            var2['description'] = var4;
            var4 = _closure1_slot6;
            var6 = var4.CREATE_EVENTS;
            var2['flag'] = var6;
            var1[var3] = var2;
            var3 = var4.SET_VOICE_CHANNEL_STATUS;
            var2 = var3.toString;
            var3 = var2.bind(var3)();
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.VBwkUV;
            var9 = var10.bind(var11)(var9);
            var2['title'] = var9;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.C6BzX1;
            var2['description'] = var5;
            var4 = var4.SET_VOICE_CHANNEL_STATUS;
            var2['flag'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['getChannelPermissionSpecMap'] = var2;
    return var1;
})();