// app/modules/channel_permissions/ChannelPermissionsConstants.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var1 = native3;
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
    var2 = function getChannelPermissionSpecMap(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var11 = arg2;
            var9 = arg3;
            var14 = arg4;
            var6 = var12.type;
            var1 = {};
            var2 = _closure1_slot6;
            var3 = var2.VIEW_CHANNEL;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 116; continue _fun0001 }
 57:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 1;
            var7 = var15[var2];
            var10 = undefined;
            var7 = var13.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var2 = var15[var2];
            var2 = var13.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.W/A4Qk;
            var2 = var7.bind(var8)(var2);
            _fun0001_ip = 173; continue _fun0001;
 116:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 1;
            var8 = var16[var7];
            var13 = undefined;
            var8 = var15.bind(var13)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var16[var7];
            var7 = var15.bind(var13)(var7);
            var7 = var7.t;
            var7 = var7.uV83ys;
            var2 = var8.bind(var10)(var7);
 173:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var7 = var2.GUILD_CATEGORY;
            if(var11) { _fun0001_ip = 271; continue _fun0001 }
 190:
            if(!(var6 !== var7)) { _fun0001_ip = 231; continue _fun0001 }
 194:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var8 = var8[var2];
            var2 = undefined;
            var2 = var10.bind(var2)(var8);
            var2 = var2.t;
            var2 = var2.M2iEy8;
            _fun0001_ip = 266; continue _fun0001;
 231:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 1;
            var10 = var10[var8];
            var8 = undefined;
            var8 = var13.bind(var8)(var10);
            var8 = var8.t;
            var2 = var8.SzosGh;
 266:
            _fun0001_ip = 412; continue _fun0001;
 271:
            if(!(var7 !== var6)) { _fun0001_ip = 377; continue _fun0001 }
 275:
            var7 = _closure1_slot3;
            var7 = var7.GUILD_VOICE;
            if(!(var7 !== var6)) { _fun0001_ip = 340; continue _fun0001 }
 289:
            var7 = _closure1_slot3;
            var7 = var7.GUILD_STAGE_VOICE;
            if(!(var7 !== var6)) { _fun0001_ip = 340; continue _fun0001 }
 303:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.3jG0Bg;
            _fun0001_ip = 412; continue _fun0001;
 340:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.ejL1Wl;
            _fun0001_ip = 412; continue _fun0001;
 377:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var2 = var7.o/vBzs;
 412:
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
            if(!(var6 !== var3)) { _fun0001_ip = 526; continue _fun0001 }
 467:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 1;
            var7 = var15[var3];
            var10 = undefined;
            var7 = var13.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var15[var3];
            var3 = var13.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3.nAw15O;
            var3 = var7.bind(var8)(var3);
            _fun0001_ip = 583; continue _fun0001;
 526:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 1;
            var8 = var16[var7];
            var13 = undefined;
            var8 = var15.bind(var13)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var16[var7];
            var7 = var15.bind(var13)(var7);
            var7 = var7.t;
            var7 = var7.9qLtWl;
            var3 = var8.bind(var10)(var7);
 583:
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var3 !== var6)) { _fun0001_ip = 743; continue _fun0001 }
 604:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var6)) { _fun0001_ip = 706; continue _fun0001 }
 618:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var3 !== var6)) { _fun0001_ip = 669; continue _fun0001 }
 632:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var7 = var7[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var3.t;
            var3 = var3.ydL28v;
            _fun0001_ip = 778; continue _fun0001;
 669:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.SDX66+;
            _fun0001_ip = 778; continue _fun0001;
 706:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.+gl2nZ;
            _fun0001_ip = 778; continue _fun0001;
 743:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var10.bind(var7)(var8);
            var7 = var7.t;
            var3 = var7.KJ2JnJ;
 778:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var7 = var3.MANAGE_CHANNELS;
            var2['flag'] = var7;
            var1[var4] = var2;
            var4 = var3.MANAGE_ROLES;
            var2 = var4.toString;
            var10 = var2.bind(var4)();
            var4 = {};
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 1;
            var13 = var2[var8];
            var7 = undefined;
            var13 = var15.bind(var7)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var2[var8];
            var13 = var15.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.ICb6am;
            var13 = var16.bind(var17)(var13);
            var4['title'] = var13;
            var13 = _closure1_slot3;
            var13 = var13.GUILD_CATEGORY;
            if(!(var13 !== var6)) { _fun0001_ip = 974; continue _fun0001 }
 896:
            var13 = _closure1_slot3;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var6)) { _fun0001_ip = 942; continue _fun0001 }
 910:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var16.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.hOMXOj;
            _fun0001_ip = 1004; continue _fun0001;
 942:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var8];
            var16 = var17.bind(var7)(var16);
            var16 = var16.t;
            var13 = var16.hcw4m5;
            _fun0001_ip = 1004; continue _fun0001;
 974:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var8];
            var16 = var17.bind(var7)(var16);
            var16 = var16.t;
            var13 = var16.TyyCMD;
 1004:
            var4['description'] = var13;
            var13 = var3.MANAGE_ROLES;
            var4['flag'] = var13;
            var1[var10] = var4;
            var4 = var3.MANAGE_WEBHOOKS;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var10 = var2[var8];
            var10 = var15.bind(var7)(var10);
            var13 = var10.intl;
            var10 = var13.string;
            var2 = var2[var8];
            var2 = var15.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2./ADKmJ;
            var2 = var10.bind(var13)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 1135; continue _fun0001 }
 1103:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.CYBZr6;
            _fun0001_ip = 1165; continue _fun0001;
 1135:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.K5+ZZ2;
 1165:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.MANAGE_WEBHOOKS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var4 = var2.CREATE_INSTANT_INVITE;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = var10[var8];
            var13 = var16.bind(var7)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var10 = var10[var8];
            var10 = var16.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.zJrgTE;
            var10 = var13.bind(var15)(var10);
            var3['title'] = var10;
            var10 = _closure1_slot3;
            var10 = var10.GUILD_CATEGORY;
            if(!(var10 !== var6)) { _fun0001_ip = 1368; continue _fun0001 }
 1276:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 1336; continue _fun0001 }
 1290:
            var10 = _closure1_slot3;
            var10 = var10.GUILD_STAGE_VOICE;
            if(!(var10 !== var6)) { _fun0001_ip = 1336; continue _fun0001 }
 1304:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.q4g2aG;
            _fun0001_ip = 1398; continue _fun0001;
 1336:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var15.bind(var7)(var13);
            var13 = var13.t;
            var10 = var13.lUCs1t;
            _fun0001_ip = 1398; continue _fun0001;
 1368:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var15.bind(var7)(var13);
            var13 = var13.t;
            var10 = var13.3YFAAQ;
 1398:
            var3['description'] = var10;
            var10 = var2.CREATE_INSTANT_INVITE;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.SEND_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var10 = var2.GUILD_THREADS_ONLY;
            var2 = var10.has;
            var2 = var2.bind(var10)(var6);
            if(var2) { _fun0001_ip = 1586; continue _fun0001 }
 1461:
            if(!var9) { _fun0001_ip = 1478; continue _fun0001 }
 1464:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 1532; continue _fun0001 }
 1478:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var15.bind(var7)(var10);
            var13 = var10.intl;
            var10 = var13.string;
            var2 = var2[var8];
            var2 = var15.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.T32rkJ;
            var2 = var10.bind(var13)(var2);
            _fun0001_ip = 1584; continue _fun0001;
 1532:
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = var10[var8];
            var13 = var16.bind(var7)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var10 = var10[var8];
            var10 = var16.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.S1VOwc;
            var2 = var13.bind(var15)(var10);
 1584:
            _fun0001_ip = 1640; continue _fun0001;
 1586:
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = var10[var8];
            var13 = var16.bind(var7)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var10 = var10[var8];
            var10 = var16.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.nJwAHR;
            var2 = var13.bind(var15)(var10);
 1640:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 2043; continue _fun0001 }
 1661:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 1948; continue _fun0001 }
 1678:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 1915; continue _fun0001 }
 1695:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var6)) { _fun0001_ip = 1811; continue _fun0001 }
 1709:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var6)) { _fun0001_ip = 1756; continue _fun0001 }
 1723:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.WQ6zpa;
            _fun0001_ip = 2089; continue _fun0001;
 1756:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 4;
            var10 = var15[var10];
            var15 = var13.bind(var7)(var10);
            var13 = var15.getTextInVoiceSendMessageChannelPermissionText;
            var10 = null;
            var16 = var10 == var14;
            var10 = undefined;
            if(var16) { _fun0001_ip = 1801; continue _fun0001 }
 1793:
            var10 = var14.sendMessagesDisabled;
 1801:
            var2 = var13.bind(var15)(var10);
            _fun0001_ip = 2089; continue _fun0001;
 1811:
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = var19[var8];
            var10 = var13.bind(var7)(var10);
            var16 = var10.intl;
            var15 = var16.format;
            var10 = var19[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var13 = var10.WFwfSE;
            var10 = {};
            var18 = _closure1_slot1;
            var17 = 3;
            var17 = var19[var17];
            var19 = var18.bind(var7)(var17);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot5;
            var17 = var17.ANNOUNCEMENT_CHANNELS;
            var17 = var18.bind(var19)(var17);
            var10['articleURL'] = var17;
            var2 = var15.bind(var16)(var13, var10);
            _fun0001_ip = 2089; continue _fun0001;
 1915:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.LG9VAg;
            _fun0001_ip = 2089; continue _fun0001;
 1948:
            var10 = null;
            if(!(var10 != var14)) { _fun0001_ip = 2010; continue _fun0001 }
 1954:
            var10 = var14.createPostsDisabled;
            if(!var10) { _fun0001_ip = 2010; continue _fun0001 }
 1965:
            var10 = var12.isMediaChannel;
            var10 = var10.bind(var12)();
            if(var10) { _fun0001_ip = 2010; continue _fun0001 }
 1978:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 2;
            var10 = var13[var10];
            var12 = var12.bind(var7)(var10);
            var10 = var12.getForumChannelPermissionText;
            var10 = var10.bind(var12)();
            _fun0001_ip = 2038; continue _fun0001;
 2010:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var10 = var12.LG9VAg;
 2038:
            var2 = var10;
            _fun0001_ip = 2089; continue _fun0001;
 2043:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var12 = var10.t;
            if(var9) { _fun0001_ip = 2078; continue _fun0001 }
 2068:
            var10 = var12.qLnFpa;
            _fun0001_ip = 2086; continue _fun0001;
 2078:
            var10 = var12.IjeLur;
 2086:
            var2 = var10;
 2089:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.SEND_MESSAGES;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.EMBED_LINKS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.969dEB;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2232; continue _fun0001 }
 2200:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.XFFhAw;
            _fun0001_ip = 2262; continue _fun0001;
 2232:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.7zlUa2;
 2262:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.EMBED_LINKS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.ATTACH_FILES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var3[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var3[var8];
            var3 = var13.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.3AS4UF;
            var3 = var10.bind(var12)(var3);
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 2405; continue _fun0001 }
 2373:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var10.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.WK9r7O;
            _fun0001_ip = 2435; continue _fun0001;
 2405:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var3 = var10.XREf9v;
 2435:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var10 = var3.ATTACH_FILES;
            var2['flag'] = var10;
            var1[var4] = var2;
            var4 = var3.ADD_REACTIONS;
            var2 = var4.toString;
            var10 = var2.bind(var4)();
            var4 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = var2[var8];
            var12 = var13.bind(var7)(var12);
            var16 = var12.intl;
            var15 = var16.string;
            var12 = var2[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.yEoJAg;
            var12 = var15.bind(var16)(var12);
            var4['title'] = var12;
            var12 = _closure1_slot3;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var6)) { _fun0001_ip = 2624; continue _fun0001 }
 2546:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var6)) { _fun0001_ip = 2592; continue _fun0001 }
 2560:
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.PVjR1d;
            _fun0001_ip = 2654; continue _fun0001;
 2592:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var12 = var15.xSSbIi;
            _fun0001_ip = 2654; continue _fun0001;
 2624:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var12 = var15.pZT2Zm;
 2654:
            var4['description'] = var12;
            var12 = var3.ADD_REACTIONS;
            var4['flag'] = var12;
            var1[var10] = var4;
            var4 = var3.USE_EXTERNAL_EMOJIS;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.+bxf3N;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2785; continue _fun0001 }
 2753:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Qc5vOj;
            _fun0001_ip = 2815; continue _fun0001;
 2785:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.mWAbKy;
 2815:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.USE_EXTERNAL_EMOJIS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.USE_EXTERNAL_STICKERS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.ERNhYW;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 2958; continue _fun0001 }
 2926:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.VF4fZW;
            _fun0001_ip = 2988; continue _fun0001;
 2958:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.39whJy;
 2988:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.USE_EXTERNAL_STICKERS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.MENTION_EVERYONE;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var6 !== var3)) { _fun0001_ip = 3097; continue _fun0001 }
 3043:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var3[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var3[var8];
            var3 = var13.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.Y78KGB;
            var3 = var10.bind(var12)(var3);
            _fun0001_ip = 3151; continue _fun0001;
 3097:
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var8];
            var12 = var15.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var8];
            var10 = var15.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.VDUAHB;
            var3 = var12.bind(var13)(var10);
 3151:
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 3247; continue _fun0001 }
 3169:
            var3 = _closure1_slot3;
            var3 = var3.GUILD_STAGE_VOICE;
            if(!(var6 !== var3)) { _fun0001_ip = 3215; continue _fun0001 }
 3183:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var10.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.6IUSdn;
            _fun0001_ip = 3245; continue _fun0001;
 3215:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var3 = var10.rZn1oK;
 3245:
            _fun0001_ip = 3277; continue _fun0001;
 3247:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var3 = var10.HOhg/P;
 3277:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var10 = var3.MENTION_EVERYONE;
            var2['flag'] = var10;
            var1[var4] = var2;
            var4 = var3.MANAGE_MESSAGES;
            var2 = var4.toString;
            var10 = var2.bind(var4)();
            var4 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = var2[var8];
            var12 = var13.bind(var7)(var12);
            var16 = var12.intl;
            var15 = var16.string;
            var12 = var2[var8];
            var12 = var13.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.6lU9xM;
            var12 = var15.bind(var16)(var12);
            var4['title'] = var12;
            var12 = _closure1_slot3;
            var12 = var12.GUILD_CATEGORY;
            if(!(var12 !== var6)) { _fun0001_ip = 3541; continue _fun0001 }
 3391:
            var12 = _closure1_slot3;
            var12 = var12.GUILD_ANNOUNCEMENT;
            if(!(var12 !== var6)) { _fun0001_ip = 3440; continue _fun0001 }
 3405:
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.SeA+Gx;
            _fun0001_ip = 3571; continue _fun0001;
 3440:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = var21[var8];
            var15 = var16.bind(var7)(var15);
            var18 = var15.intl;
            var17 = var18.format;
            var15 = var21[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var16 = var15.XRxOo6;
            var15 = {};
            var20 = _closure1_slot1;
            var19 = 3;
            var19 = var21[var19];
            var21 = var20.bind(var7)(var19);
            var20 = var21.getArticleURL;
            var19 = _closure1_slot5;
            var19 = var19.ANNOUNCEMENT_CHANNELS;
            var19 = var20.bind(var21)(var19);
            var15['articleURL'] = var19;
            var12 = var17.bind(var18)(var16, var15);
            _fun0001_ip = 3571; continue _fun0001;
 3541:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var16.bind(var7)(var15);
            var15 = var15.t;
            var12 = var15.5R9nYm;
 3571:
            var4['description'] = var12;
            var12 = var3.MANAGE_MESSAGES;
            var4['flag'] = var12;
            var1[var10] = var4;
            var4 = var3.PIN_MESSAGES;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Y5BI39;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 3702; continue _fun0001 }
 3670:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.0l2EjI;
            _fun0001_ip = 3732; continue _fun0001;
 3702:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.gmbD8/;
 3732:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.PIN_MESSAGES;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.READ_MESSAGE_HISTORY;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var10 = var2.GUILD_THREADS_ONLY;
            var2 = var10.has;
            var2 = var2.bind(var10)(var6);
            var15 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var8];
            var12 = var15.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var8];
            var10 = var15.bind(var7)(var10);
            var10 = var10.t;
            if(var2) { _fun0001_ip = 3850; continue _fun0001 }
 3837:
            var2 = var10.l9ufaW;
            var2 = var12.bind(var13)(var2);
            _fun0001_ip = 3863; continue _fun0001;
 3850:
            var10 = var10.0RQwtr;
            var2 = var12.bind(var13)(var10);
 3863:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 4040; continue _fun0001 }
 3884:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var6)) { _fun0001_ip = 3988; continue _fun0001 }
 3898:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 3956; continue _fun0001 }
 3912:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 3956; continue _fun0001 }
 3926:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.cuMfHx;
            _fun0001_ip = 4070; continue _fun0001;
 3956:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.RqCc7u;
            _fun0001_ip = 4070; continue _fun0001;
 3988:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 4;
            var10 = var13[var10];
            var13 = var12.bind(var7)(var10);
            var12 = var13.getTextInVoiceReadMessageHistoryChannelPermissionText;
            var10 = null;
            var15 = var10 == var14;
            var10 = undefined;
            if(var15) { _fun0001_ip = 4033; continue _fun0001 }
 4025:
            var10 = var14.readMessageHistoryDisabled;
 4033:
            var2 = var12.bind(var13)(var10);
            _fun0001_ip = 4070; continue _fun0001;
 4040:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.cJRv/v;
 4070:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.READ_MESSAGE_HISTORY;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.SEND_TTS_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.mMbwh4;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4213; continue _fun0001 }
 4181:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.CpakGx;
            _fun0001_ip = 4243; continue _fun0001;
 4213:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.b7pc9f;
 4243:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.SEND_TTS_MESSAGES;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.USE_APPLICATION_COMMANDS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.nkoPOj;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4386; continue _fun0001 }
 4354:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.ReG3gI;
            _fun0001_ip = 4416; continue _fun0001;
 4386:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.D+qW0N;
 4416:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.USE_APPLICATION_COMMANDS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.SEND_VOICE_MESSAGES;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var2 = var2[var8];
            var2 = var13.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.WlWSBQ;
            var2 = var10.bind(var12)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 4559; continue _fun0001 }
 4527:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.BhEo9f;
            _fun0001_ip = 4589; continue _fun0001;
 4559:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.gavGfn;
 4589:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.SEND_VOICE_MESSAGES;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.SEND_POLLS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var2 = {};
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var3[var8];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var3[var8];
            var3 = var13.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.UMQ7W1;
            var3 = var10.bind(var12)(var3);
            var2['title'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_CATEGORY;
            if(!(var6 !== var3)) { _fun0001_ip = 4732; continue _fun0001 }
 4700:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var10.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.ckKKIC;
            _fun0001_ip = 4762; continue _fun0001;
 4732:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var3 = var10.18Ya7O;
 4762:
            var2['description'] = var3;
            var3 = _closure1_slot6;
            var10 = var3.SEND_POLLS;
            var2['flag'] = var10;
            var1[var4] = var2;
            var4 = var3.CONNECT;
            var2 = var4.toString;
            var10 = var2.bind(var4)();
            var4 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = var2[var8];
            var13 = var12.bind(var7)(var13);
            var15 = var13.intl;
            var14 = var15.string;
            var13 = var2[var8];
            var13 = var12.bind(var7)(var13);
            var13 = var13.t;
            var13 = var13.S0W8Z2;
            var13 = var14.bind(var15)(var13);
            var4['title'] = var13;
            var13 = _closure1_slot3;
            var13 = var13.GUILD_CATEGORY;
            if(var11) { _fun0001_ip = 5078; continue _fun0001 }
 4875:
            if(!(var13 !== var6)) { _fun0001_ip = 5043; continue _fun0001 }
 4882:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 5008; continue _fun0001 }
 4896:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 4973; continue _fun0001 }
 4910:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 4973; continue _fun0001 }
 4924:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 4973; continue _fun0001 }
 4938:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var14.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.HvG8ub;
            _fun0001_ip = 5267; continue _fun0001;
 4973:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.QU/Rw8;
            _fun0001_ip = 5267; continue _fun0001;
 5008:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.G9+QiY;
            _fun0001_ip = 5267; continue _fun0001;
 5043:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var8];
            var14 = var15.bind(var7)(var14);
            var14 = var14.t;
            var11 = var14.stA0Hh;
            _fun0001_ip = 5267; continue _fun0001;
 5078:
            if(!(var13 !== var6)) { _fun0001_ip = 5237; continue _fun0001 }
 5085:
            var13 = _closure1_slot3;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var6)) { _fun0001_ip = 5205; continue _fun0001 }
 5099:
            var13 = _closure1_slot3;
            var13 = var13.GUILD_TEXT;
            if(!(var13 !== var6)) { _fun0001_ip = 5173; continue _fun0001 }
 5113:
            var13 = _closure1_slot3;
            var13 = var13.GUILD_FORUM;
            if(!(var13 !== var6)) { _fun0001_ip = 5173; continue _fun0001 }
 5127:
            var13 = _closure1_slot3;
            var13 = var13.GUILD_MEDIA;
            if(!(var13 !== var6)) { _fun0001_ip = 5173; continue _fun0001 }
 5141:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.j4AyOz;
            _fun0001_ip = 5267; continue _fun0001;
 5173:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.LsS8xc;
            _fun0001_ip = 5267; continue _fun0001;
 5205:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.SOFNhI;
            _fun0001_ip = 5267; continue _fun0001;
 5237:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.XcrieH;
 5267:
            var4['description'] = var11;
            var11 = var3.CONNECT;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.SPEAK;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.8w1tIS;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 5521; continue _fun0001 }
 5369:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 5489; continue _fun0001 }
 5383:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 5457; continue _fun0001 }
 5397:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 5457; continue _fun0001 }
 5411:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 5457; continue _fun0001 }
 5425:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.568E6e;
            _fun0001_ip = 5551; continue _fun0001;
 5457:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.+VXsJC;
            _fun0001_ip = 5551; continue _fun0001;
 5489:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.a8n74+;
            _fun0001_ip = 5551; continue _fun0001;
 5521:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.iXhS6e;
 5551:
            var4['description'] = var11;
            var11 = var3.SPEAK;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.STREAM;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.FlNoSU;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 5805; continue _fun0001 }
 5653:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 5773; continue _fun0001 }
 5667:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 5773; continue _fun0001 }
 5681:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 5773; continue _fun0001 }
 5695:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 5741; continue _fun0001 }
 5709:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.RY8rIS;
            _fun0001_ip = 5835; continue _fun0001;
 5741:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.swJcNz;
            _fun0001_ip = 5835; continue _fun0001;
 5773:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.AuEQEB;
            _fun0001_ip = 5835; continue _fun0001;
 5805:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.ryG0/P;
 5835:
            var4['description'] = var11;
            var11 = var3.STREAM;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.USE_EMBEDDED_ACTIVITIES;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.rLSGen;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 6026; continue _fun0001 }
 5934:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 5994; continue _fun0001 }
 5948:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 5994; continue _fun0001 }
 5962:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.qinvMT;
            _fun0001_ip = 6056; continue _fun0001;
 5994:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.RyEwlZ;
            _fun0001_ip = 6056; continue _fun0001;
 6026:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.maNzCA;
 6056:
            var4['description'] = var11;
            var11 = var3.USE_EMBEDDED_ACTIVITIES;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.USE_EXTERNAL_APPS;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.3TzAk5;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 6249; continue _fun0001 }
 6157:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 6217; continue _fun0001 }
 6171:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 6217; continue _fun0001 }
 6185:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.czqMLi;
            _fun0001_ip = 6279; continue _fun0001;
 6217:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.qPUPio;
            _fun0001_ip = 6279; continue _fun0001;
 6249:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.bgIY3N;
 6279:
            var4['description'] = var11;
            var11 = var3.USE_EXTERNAL_APPS;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.USE_SOUNDBOARD;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.Bco7ND;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 6631; continue _fun0001 }
 6381:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 6530; continue _fun0001 }
 6398:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 6530; continue _fun0001 }
 6412:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 6530; continue _fun0001 }
 6426:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = var18[var8];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var14 = var15.format;
            var11 = var18[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var13 = var11.GEi6Ym;
            var11 = {};
            var17 = _closure1_slot1;
            var16 = 3;
            var16 = var18[var16];
            var18 = var17.bind(var7)(var16);
            var17 = var18.getArticleURL;
            var16 = _closure1_slot5;
            var16 = var16.SOUNDBOARD;
            var16 = var17.bind(var18)(var16);
            var11['helpCenterArticle'] = var16;
            var11 = var14.bind(var15)(var13, var11);
            _fun0001_ip = 6730; continue _fun0001;
 6530:
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = var19[var8];
            var13 = var14.bind(var7)(var13);
            var16 = var13.intl;
            var15 = var16.format;
            var13 = var19[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var14 = var13.6eYqU1;
            var13 = {};
            var18 = _closure1_slot1;
            var17 = 3;
            var17 = var19[var17];
            var19 = var18.bind(var7)(var17);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot5;
            var17 = var17.SOUNDBOARD;
            var17 = var18.bind(var19)(var17);
            var13['helpCenterArticle'] = var17;
            var11 = var15.bind(var16)(var14, var13);
            _fun0001_ip = 6730; continue _fun0001;
 6631:
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = var19[var8];
            var13 = var14.bind(var7)(var13);
            var16 = var13.intl;
            var15 = var16.format;
            var13 = var19[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var14 = var13.0kBp//;
            var13 = {};
            var18 = _closure1_slot1;
            var17 = 3;
            var17 = var19[var17];
            var19 = var18.bind(var7)(var17);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot5;
            var17 = var17.SOUNDBOARD;
            var17 = var18.bind(var19)(var17);
            var13['helpCenterArticle'] = var17;
            var11 = var15.bind(var16)(var14, var13);
 6730:
            var4['description'] = var11;
            var11 = var3.USE_SOUNDBOARD;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.USE_EXTERNAL_SOUNDS;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.pwaVJy;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.qDpPtb;
            var4['description'] = var11;
            var11 = var3.USE_EXTERNAL_SOUNDS;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.USE_VAD;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.08zAV1;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 7089; continue _fun0001 }
 6937:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 7057; continue _fun0001 }
 6951:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 7025; continue _fun0001 }
 6965:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 7025; continue _fun0001 }
 6979:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 7025; continue _fun0001 }
 6993:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.s2eihY;
            _fun0001_ip = 7119; continue _fun0001;
 7025:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.3GJwsb;
            _fun0001_ip = 7119; continue _fun0001;
 7057:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.BJKqsb;
            _fun0001_ip = 7119; continue _fun0001;
 7089:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.fUYPl5;
 7119:
            var4['description'] = var11;
            var11 = var3.USE_VAD;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.PRIORITY_SPEAKER;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.BVK71t;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 7488; continue _fun0001 }
 7221:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 7380; continue _fun0001 }
 7238:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 7380; continue _fun0001 }
 7255:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 7380; continue _fun0001 }
 7269:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = var16[var8];
            var11 = var19.bind(var7)(var11);
            var15 = var11.intl;
            var14 = var15.format;
            var11 = var16[var8];
            var11 = var19.bind(var7)(var11);
            var11 = var11.t;
            var13 = var11.Ij0yKS;
            var11 = {};
            var17 = var16[var8];
            var17 = var19.bind(var7)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var8];
            var16 = var19.bind(var7)(var16);
            var16 = var16.t;
            var16 = var16.DkSwJy;
            var16 = var17.bind(var18)(var16);
            var11['keybind'] = var16;
            var11 = var14.bind(var15)(var13, var11);
            _fun0001_ip = 7594; continue _fun0001;
 7380:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = var17[var8];
            var13 = var20.bind(var7)(var13);
            var16 = var13.intl;
            var15 = var16.format;
            var13 = var17[var8];
            var13 = var20.bind(var7)(var13);
            var13 = var13.t;
            var14 = var13.4nbjLy;
            var13 = {};
            var18 = var17[var8];
            var18 = var20.bind(var7)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var8];
            var17 = var20.bind(var7)(var17);
            var17 = var17.t;
            var17 = var17.DkSwJy;
            var17 = var18.bind(var19)(var17);
            var13['keybind'] = var17;
            var11 = var15.bind(var16)(var14, var13);
            _fun0001_ip = 7594; continue _fun0001;
 7488:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = var17[var8];
            var13 = var20.bind(var7)(var13);
            var16 = var13.intl;
            var15 = var16.format;
            var13 = var17[var8];
            var13 = var20.bind(var7)(var13);
            var13 = var13.t;
            var14 = var13.g5MzOD;
            var13 = {};
            var18 = var17[var8];
            var18 = var20.bind(var7)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var8];
            var17 = var20.bind(var7)(var17);
            var17 = var17.t;
            var17 = var17.DkSwJy;
            var17 = var18.bind(var19)(var17);
            var13['keybind'] = var17;
            var11 = var15.bind(var16)(var14, var13);
 7594:
            var4['description'] = var11;
            var11 = var3.PRIORITY_SPEAKER;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.MUTE_MEMBERS;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.8EI309;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 7848; continue _fun0001 }
 7696:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 7816; continue _fun0001 }
 7710:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 7784; continue _fun0001 }
 7724:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 7784; continue _fun0001 }
 7738:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 7784; continue _fun0001 }
 7752:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.LW5C9P;
            _fun0001_ip = 7878; continue _fun0001;
 7784:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.KYDG2N;
            _fun0001_ip = 7878; continue _fun0001;
 7816:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.EbvdHx;
            _fun0001_ip = 7878; continue _fun0001;
 7848:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.bcuobG;
 7878:
            var4['description'] = var11;
            var11 = var3.MUTE_MEMBERS;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.DEAFEN_MEMBERS;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.9L47Fh;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 8083; continue _fun0001 }
 7977:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 8051; continue _fun0001 }
 7991:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 8051; continue _fun0001 }
 8005:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 8051; continue _fun0001 }
 8019:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.UAdIxs;
            _fun0001_ip = 8113; continue _fun0001;
 8051:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.d+i1nZ;
            _fun0001_ip = 8113; continue _fun0001;
 8083:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.amZ5vr;
 8113:
            var4['description'] = var11;
            var11 = var3.DEAFEN_MEMBERS;
            var4['flag'] = var11;
            var1[var10] = var4;
            var10 = var3.MOVE_MEMBERS;
            var4 = var10.toString;
            var10 = var4.bind(var10)();
            var4 = {};
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var2[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.YtjJPT;
            var11 = var13.bind(var14)(var11);
            var4['title'] = var11;
            var11 = _closure1_slot3;
            var11 = var11.GUILD_CATEGORY;
            if(!(var11 !== var6)) { _fun0001_ip = 8367; continue _fun0001 }
 8215:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var11 !== var6)) { _fun0001_ip = 8335; continue _fun0001 }
 8229:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_TEXT;
            if(!(var11 !== var6)) { _fun0001_ip = 8303; continue _fun0001 }
 8243:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_FORUM;
            if(!(var11 !== var6)) { _fun0001_ip = 8303; continue _fun0001 }
 8257:
            var11 = _closure1_slot3;
            var11 = var11.GUILD_MEDIA;
            if(!(var11 !== var6)) { _fun0001_ip = 8303; continue _fun0001 }
 8271:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.nSD1am;
            _fun0001_ip = 8397; continue _fun0001;
 8303:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.cbdQy8;
            _fun0001_ip = 8397; continue _fun0001;
 8335:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.bizKz8;
            _fun0001_ip = 8397; continue _fun0001;
 8367:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var13 = var13.t;
            var11 = var13.XmoyRE;
 8397:
            var4['description'] = var11;
            var11 = var3.MOVE_MEMBERS;
            var4['flag'] = var11;
            var1[var10] = var4;
            var4 = var3.REQUEST_TO_SPEAK;
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = {};
            var10 = var2[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.5kicT0;
            var2 = var10.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 8528; continue _fun0001 }
 8496:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.uzlYFB;
            _fun0001_ip = 8558; continue _fun0001;
 8528:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.T1lMSk;
 8558:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.REQUEST_TO_SPEAK;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.MANAGE_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var10 = var2.GUILD_THREADS_ONLY;
            var2 = var10.has;
            var2 = var2.bind(var10)(var6);
            if(var2) { _fun0001_ip = 8750; continue _fun0001 }
 8625:
            if(!var9) { _fun0001_ip = 8642; continue _fun0001 }
 8628:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 8696; continue _fun0001 }
 8642:
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.kEqgr6;
            var2 = var10.bind(var11)(var2);
            _fun0001_ip = 8748; continue _fun0001;
 8696:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.QKe7Q0;
            var2 = var11.bind(var12)(var10);
 8748:
            _fun0001_ip = 8804; continue _fun0001;
 8750:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.ossiZG;
            var2 = var11.bind(var12)(var10);
 8804:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 8914; continue _fun0001 }
 8822:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 8882; continue _fun0001 }
 8836:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 8882; continue _fun0001 }
 8850:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.yvan0t;
            _fun0001_ip = 8960; continue _fun0001;
 8882:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.XLi/jI;
            _fun0001_ip = 8960; continue _fun0001;
 8914:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var11 = var10.t;
            if(var9) { _fun0001_ip = 8949; continue _fun0001 }
 8939:
            var10 = var11.YDIQ8P;
            _fun0001_ip = 8957; continue _fun0001;
 8949:
            var10 = var11.S31soa;
 8957:
            var2 = var10;
 8960:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.MANAGE_THREADS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.CREATE_PUBLIC_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.25rKnZ;
            var2 = var10.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9103; continue _fun0001 }
 9071:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.5SDtGB;
            _fun0001_ip = 9133; continue _fun0001;
 9103:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.+M1yLi;
 9133:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.CREATE_PUBLIC_THREADS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.CREATE_PRIVATE_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.QwbTSU;
            var2 = var10.bind(var11)(var2);
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9276; continue _fun0001 }
 9244:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Chg2zc;
            _fun0001_ip = 9306; continue _fun0001;
 9276:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.hBS/zs;
 9306:
            var3['description'] = var2;
            var2 = _closure1_slot6;
            var10 = var2.CREATE_PRIVATE_THREADS;
            var3['flag'] = var10;
            var1[var4] = var3;
            var3 = var2.SEND_MESSAGES_IN_THREADS;
            var2 = var3.toString;
            var4 = var2.bind(var3)();
            var3 = {};
            var2 = _closure1_slot4;
            var10 = var2.GUILD_THREADS_ONLY;
            var2 = var10.has;
            var2 = var2.bind(var10)(var6);
            if(var2) { _fun0001_ip = 9498; continue _fun0001 }
 9373:
            if(!var9) { _fun0001_ip = 9390; continue _fun0001 }
 9376:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var6 !== var2)) { _fun0001_ip = 9444; continue _fun0001 }
 9390:
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.fTE74u;
            var2 = var10.bind(var11)(var2);
            _fun0001_ip = 9496; continue _fun0001;
 9444:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.5QlVGx;
            var2 = var11.bind(var12)(var10);
 9496:
            _fun0001_ip = 9552; continue _fun0001;
 9498:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var8];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.fqhqWl;
            var2 = var11.bind(var12)(var10);
 9552:
            var3['title'] = var2;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var6)) { _fun0001_ip = 9662; continue _fun0001 }
 9570:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var6)) { _fun0001_ip = 9630; continue _fun0001 }
 9584:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var6)) { _fun0001_ip = 9630; continue _fun0001 }
 9598:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.xHO6MT;
            _fun0001_ip = 9708; continue _fun0001;
 9630:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            var2 = var10.XTnrPD;
            _fun0001_ip = 9708; continue _fun0001;
 9662:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.t;
            if(var9) { _fun0001_ip = 9697; continue _fun0001 }
 9687:
            var9 = var10.VvrChI;
            _fun0001_ip = 9705; continue _fun0001;
 9697:
            var9 = var10.DlIVcH;
 9705:
            var2 = var9;
 9708:
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
            if(!(var6 !== var2)) { _fun0001_ip = 9851; continue _fun0001 }
 9819:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.4pO/TU;
            _fun0001_ip = 9881; continue _fun0001;
 9851:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var2 = var9.CP2sz8;
 9881:
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
            if(!(var6 !== var4)) { _fun0001_ip = 10024; continue _fun0001 }
 9992:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.sPoBLS;
            _fun0001_ip = 10054; continue _fun0001;
 10024:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.t;
            var4 = var6.XpibmJ;
 10054:
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