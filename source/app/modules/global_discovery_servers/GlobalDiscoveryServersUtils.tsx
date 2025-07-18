// app/modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _navigateToGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 203; continue _fun0001 }
 13:
                    var12 = var2.loadId;
                    var13 = var2.guildId;
                    var11 = var2.index;
                    var10 = var2.categoryId;
                    var9 = var2.analyticsLocation;
                    var3 = var2.options;
                    var4 = undefined;
                    SaveGenerator(address=52);
 50:
                    return var4;
 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 200; continue _fun0001 }
 61:
                    var7 = {};
                    var16 = var7;
                    var15 = var3;
                    var3 = copyDataProperties(var16, var15);
                    var3 = 'loadId';
                    var7[var3] = var12;
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 7;
                    var3 = var8[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.startLurking;
                    var3 = var3.bind(var6)(var13, var9, var7);
                    SaveGenerator(address=122);
 120:
                    return var3;
 122:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 197; continue _fun0001 }
 128:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 8;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.track;
                    var5 = _closure1_slot14;
                    var6 = var5.GUILD_DISCOVERY_GUILD_SELECTED;
                    var5 = {};
                    var5['guild_id'] = var13;
                    var5['load_id'] = var12;
                    var5['card_index'] = var11;
                    var5['category_id'] = var10;
                    var5['location'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    return var4;
 197:
                    return var3;
 200:
                    return var2;
 203:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GlobalDiscoveryServerTab;
    var _closure1_slot7 = var7;
    var7 = var4.FEATURED_GUILDS_CACHE_DURATION;
    var _closure1_slot8 = var7;
    var7 = var4.FEATURED_GUILDS_SEARCH_OPTIONS;
    var _closure1_slot9 = var7;
    var7 = var4.CategoryId;
    var _closure1_slot10 = var7;
    var7 = var4.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot11 = var7;
    var7 = var4.getLanguageOptions;
    var _closure1_slot12 = var7;
    var4 = var4.HUBS_CATEGORY_ID;
    var _closure1_slot13 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getGlobalDiscoveryServersTabTitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FEATURED;
            if(!(var2 !== var3)) { _fun0002_ip = 479; continue _fun0002 }
 23:
            var2 = _closure1_slot7;
            var2 = var2.GAMING;
            if(!(var2 !== var3)) { _fun0002_ip = 420; continue _fun0002 }
 40:
            var2 = _closure1_slot7;
            var2 = var2.MUSIC;
            if(!(var2 !== var3)) { _fun0002_ip = 361; continue _fun0002 }
 57:
            var2 = _closure1_slot7;
            var2 = var2.ENTERTAINMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 302; continue _fun0002 }
 74:
            var2 = _closure1_slot7;
            var2 = var2.TECH;
            if(!(var2 !== var3)) { _fun0002_ip = 243; continue _fun0002 }
 91:
            var2 = _closure1_slot7;
            var2 = var2.EDUCATION;
            if(!(var2 !== var3)) { _fun0002_ip = 184; continue _fun0002 }
 105:
            var2 = _closure1_slot7;
            var2 = var2.HUBS;
            if(!(var2 !== var3)) { _fun0002_ip = 123; continue _fun0002 }
 119:
            var2 = undefined;
            return var2;
 123:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.q469/f;
            var2 = var3.bind(var4)(var2);
            return var2;
 184:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Gy9woq;
            var2 = var3.bind(var4)(var2);
            return var2;
 243:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.0A0By8;
            var2 = var3.bind(var4)(var2);
            return var2;
 302:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gSbmdn;
            var2 = var3.bind(var4)(var2);
            return var2;
 361:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.nt9PLy;
            var2 = var3.bind(var4)(var2);
            return var2;
 420:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.CD/USE;
            var2 = var3.bind(var4)(var2);
            return var2;
 479:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.RU+DCQ;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGlobalDiscoveryServersTabTitle'] = var4;
    var4 = function getGlobalDiscoveryServersBannerTitle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FEATURED;
            if(!(var2 !== var5)) { _fun0003_ip = 530; continue _fun0003 }
 23:
            var2 = _closure1_slot7;
            var2 = var2.GAMING;
            if(!(var2 !== var5)) { _fun0003_ip = 471; continue _fun0003 }
 40:
            var2 = _closure1_slot7;
            var2 = var2.MUSIC;
            if(!(var2 !== var5)) { _fun0003_ip = 412; continue _fun0003 }
 57:
            var2 = _closure1_slot7;
            var2 = var2.ENTERTAINMENT;
            if(!(var2 !== var5)) { _fun0003_ip = 353; continue _fun0003 }
 74:
            var2 = _closure1_slot7;
            var2 = var2.TECH;
            if(!(var2 !== var5)) { _fun0003_ip = 294; continue _fun0003 }
 91:
            var2 = _closure1_slot7;
            var2 = var2.EDUCATION;
            if(!(var2 !== var5)) { _fun0003_ip = 235; continue _fun0003 }
 108:
            var2 = _closure1_slot7;
            var2 = var2.HUBS;
            if(!(var2 !== var5)) { _fun0003_ip = 174; continue _fun0003 }
 122:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getGlobalDiscoveryServerTabTitle] Unsupported tab: ';
            var8 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 174:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.X5xPlZ;
            var2 = var3.bind(var4)(var2);
            return var2;
 235:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Gy9woq;
            var2 = var3.bind(var4)(var2);
            return var2;
 294:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.0A0By8;
            var2 = var3.bind(var4)(var2);
            return var2;
 353:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gSbmdn;
            var2 = var3.bind(var4)(var2);
            return var2;
 412:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.nt9PLy;
            var2 = var3.bind(var4)(var2);
            return var2;
 471:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.CD/USE;
            var2 = var3.bind(var4)(var2);
            return var2;
 530:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.OlDfzM;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGlobalDiscoveryServersBannerTitle'] = var4;
    var4 = function getGlobalDiscoveryServersBannerDescription(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FEATURED;
            if(!(var2 !== var5)) { _fun0004_ip = 540; continue _fun0004 }
 23:
            var2 = _closure1_slot7;
            var2 = var2.GAMING;
            if(!(var2 !== var5)) { _fun0004_ip = 479; continue _fun0004 }
 40:
            var2 = _closure1_slot7;
            var2 = var2.MUSIC;
            if(!(var2 !== var5)) { _fun0004_ip = 418; continue _fun0004 }
 57:
            var2 = _closure1_slot7;
            var2 = var2.ENTERTAINMENT;
            if(!(var2 !== var5)) { _fun0004_ip = 357; continue _fun0004 }
 74:
            var2 = _closure1_slot7;
            var2 = var2.TECH;
            if(!(var2 !== var5)) { _fun0004_ip = 296; continue _fun0004 }
 91:
            var2 = _closure1_slot7;
            var2 = var2.EDUCATION;
            if(!(var2 !== var5)) { _fun0004_ip = 235; continue _fun0004 }
 108:
            var2 = _closure1_slot7;
            var2 = var2.HUBS;
            if(!(var2 !== var5)) { _fun0004_ip = 174; continue _fun0004 }
 122:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[getGlobalDiscoveryServerTabTitle] Unsupported tab: ';
            var8 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 174:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.F/IQCA;
            var2 = var3.bind(var4)(var2);
            return var2;
 235:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.sasIWV;
            var2 = var3.bind(var4)(var2);
            return var2;
 296:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Ew4d5+;
            var2 = var3.bind(var4)(var2);
            return var2;
 357:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.R09vf3;
            var2 = var3.bind(var4)(var2);
            return var2;
 418:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SOio+P;
            var2 = var3.bind(var4)(var2);
            return var2;
 479:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.AAJ5oq;
            var2 = var3.bind(var4)(var2);
            return var2;
 540:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.SdMhrq;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGlobalDiscoveryServersBannerDescription'] = var4;
    var4 = function getGlobalDiscoveryServersTabSectionTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FEATURED;
            if(!(var2 !== var3)) { _fun0005_ip = 411; continue _fun0005 }
 23:
            var2 = _closure1_slot7;
            var2 = var2.GAMING;
            if(!(var2 !== var3)) { _fun0005_ip = 350; continue _fun0005 }
 40:
            var2 = _closure1_slot7;
            var2 = var2.MUSIC;
            if(!(var2 !== var3)) { _fun0005_ip = 289; continue _fun0005 }
 57:
            var2 = _closure1_slot7;
            var2 = var2.ENTERTAINMENT;
            if(!(var2 !== var3)) { _fun0005_ip = 228; continue _fun0005 }
 74:
            var2 = _closure1_slot7;
            var2 = var2.TECH;
            if(!(var2 !== var3)) { _fun0005_ip = 167; continue _fun0005 }
 88:
            var2 = _closure1_slot7;
            var2 = var2.EDUCATION;
            if(!(var2 !== var3)) { _fun0005_ip = 106; continue _fun0005 }
 102:
            var2 = null;
            return var2;
 106:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uexPgY;
            var2 = var3.bind(var4)(var2);
            return var2;
 167:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.4dawpq;
            var2 = var3.bind(var4)(var2);
            return var2;
 228:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.k1CYxs;
            var2 = var3.bind(var4)(var2);
            return var2;
 289:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.nfgDz8;
            var2 = var3.bind(var4)(var2);
            return var2;
 350:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.fWbIpa;
            var2 = var3.bind(var4)(var2);
            return var2;
 411:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.crt84e;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGlobalDiscoveryServersTabSectionTitle'] = var4;
    var4 = function getCategoryIdFromServerTab(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.FEATURED;
            if(!(var2 !== var5)) { _fun0006_ip = 214; continue _fun0006 }
 23:
            var2 = _closure1_slot7;
            var2 = var2.GAMING;
            if(!(var2 !== var5)) { _fun0006_ip = 202; continue _fun0006 }
 40:
            var2 = _closure1_slot7;
            var2 = var2.MUSIC;
            if(!(var2 !== var5)) { _fun0006_ip = 190; continue _fun0006 }
 57:
            var2 = _closure1_slot7;
            var2 = var2.ENTERTAINMENT;
            if(!(var2 !== var5)) { _fun0006_ip = 178; continue _fun0006 }
 71:
            var2 = _closure1_slot7;
            var2 = var2.TECH;
            if(!(var2 !== var5)) { _fun0006_ip = 166; continue _fun0006 }
 85:
            var2 = _closure1_slot7;
            var2 = var2.EDUCATION;
            if(!(var2 !== var5)) { _fun0006_ip = 154; continue _fun0006 }
 99:
            var2 = _closure1_slot7;
            var2 = var2.HUBS;
            if(!(var2 !== var5)) { _fun0006_ip = 148; continue _fun0006 }
 113:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var5);
            return var2;
 148:
            var2 = _closure1_slot13;
            return var2;
 154:
            var2 = _closure1_slot10;
            var2 = var2.Education;
            return var2;
 166:
            var2 = _closure1_slot10;
            var2 = var2.Science;
            return var2;
 178:
            var2 = _closure1_slot10;
            var2 = var2.Television;
            return var2;
 190:
            var2 = _closure1_slot10;
            var2 = var2.Music;
            return var2;
 202:
            var2 = _closure1_slot10;
            var2 = var2.Activity;
            return var2;
 214:
            var1 = _closure1_slot11;
            return var1;
        }
    };
    var3['getCategoryIdFromServerTab'] = var4;
    var4 = function isStaleFeaturedGuilds(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0007_ip = 44; continue _fun0007 }
 12:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3 = var2 - var3;
            var2 = _closure1_slot8;
            var1 = var3 > var2;
 44:
            return var1;
        }
    };
    var3['isStaleFeaturedGuilds'] = var4;
    var4 = function fromDiscoverableGuildServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.splash;
        var1['splash'] = var3;
        var3 = var2.banner;
        var1['banner'] = var3;
        var3 = var2.icon;
        var1['icon'] = var3;
        var3 = global;
        var5 = var3.Set;
        var6 = var2.features;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['features'] = var3;
        var3 = var2.approximate_presence_count;
        var1['presenceCount'] = var3;
        var3 = var2.approximate_member_count;
        var1['memberCount'] = var3;
        var3 = var2.premium_subscription_count;
        var1['premiumSubscriptionCount'] = var3;
        var3 = var2.preferred_locale;
        var1['preferredLocale'] = var3;
        var3 = var2.discovery_splash;
        var1['discoverySplash'] = var3;
        var3 = var2.emojis;
        var1['emojis'] = var3;
        var2 = var2.emoji_count;
        var1['emojiCount'] = var2;
        return var1;
    };
    var3['fromDiscoverableGuildServer'] = var4;
    var4 = function fromDiscoverableGuildSearchResult(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.splash;
        var1['splash'] = var3;
        var3 = var2.banner;
        var1['banner'] = var3;
        var3 = var2.icon;
        var1['icon'] = var3;
        var3 = global;
        var5 = var3.Set;
        var6 = var2.features;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['features'] = var3;
        var3 = var2.approximate_presence_count;
        var1['presenceCount'] = var3;
        var3 = var2.approximate_member_count;
        var1['memberCount'] = var3;
        var3 = undefined;
        var1['premiumSubscriptionCount'] = var3;
        var1['preferredLocale'] = var3;
        var2 = var2.discovery_splash;
        var1['discoverySplash'] = var2;
        var2 = new Array(0);
        var1['emojis'] = var2;
        return var1;
    };
    var3['fromDiscoverableGuildSearchResult'] = var4;
    var4 = function getLanguageCodeFallback() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arguments[0];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0008_ip = 29; continue _fun0008 }
 11:
            var3 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var3;
            var5 = var2;
 29:
            var2 = var5;
            var3 = var2[Symbol.iterator];
            var2 = var3().next;
            var6 = var2().value;
            var2 = var3;
            var5 = var2 === var4;
            var2 = undefined;
            if(var5) { _fun0008_ip = 54; continue _fun0008 }
 51:
            var2 = var6;
 54:
            if(var5) { _fun0008_ip = 60; continue _fun0008 }
 57:
            var3.return();
 60:
            var _closure2_slot0 = var4;
            var3 = _closure1_slot12;
            var3 = var3.bind(var4)();
            var2 = var2.locale;
            _closure2_slot0 = var2;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.code;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0008_ip = 114; continue _fun0008 }
 108:
            var2 = 0;
            var1 = var3[var2];
 114:
            var1 = var1.code;
            return var1;
        }
    };
    var3['getLanguageCodeFallback'] = var4;
    var4 = function navigateToGuild() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['navigateToGuild'] = var4;
    var4 = function handleTabPressPrefetch() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = _closure1_slot6;
            var2 = var6.getError;
            var5 = _closure1_slot9;
            var4 = var2.bind(var6)(var5);
            var2 = var6.getIsFetching;
            var3 = var2.bind(var6)(var5);
            var2 = var6.getIsInitialFetchComplete;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0009_ip = 84; continue _fun0009 }
 47:
            if(var3) { _fun0009_ip = 84; continue _fun0009 }
 50:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var5 = 9;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.fetchFeaturedGuilds;
            var5 = var5.bind(var6)();
            _fun0009_ip = 144; continue _fun0009;
 84:
            if(!var2) { _fun0009_ip = 90; continue _fun0009 }
 87:
            var2 = !var3;
 90:
            if(!var2) { _fun0009_ip = 99; continue _fun0009 }
 93:
            var3 = null;
            var2 = var3 != var4;
 99:
            if(!var2) { _fun0009_ip = 144; continue _fun0009 }
 102:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchFeaturedGuilds;
            var1 = {};
            var4 = true;
            var1['forceRefresh'] = var4;
            var1 = var2.bind(var3)(var1);
 144:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleTabPressPrefetch'] = var4;
    var2 = function makeAnalyticsID() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var4 = var1.bind(var2)();
        var3 = var4.replace;
        var2 = /-/g;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['makeAnalyticsID'] = var2;
    return var1;
})();