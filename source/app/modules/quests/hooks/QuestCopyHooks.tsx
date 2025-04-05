// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.intl;
            entity = argBaz;
            if(entity) { _fun00008_ip = 55; continue _fun00007 }
 42:
            entity = zuuluu.formatToPlainString;
            entity = entity.bind(zuuluu)(report, tangon);
            _fun00008_ip = 67; continue _fun00007;
 55:
            michal = zuuluu.formatToParts;
            entity = michal.bind(zuuluu)(report, tangon);
 67:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            oscard = michal.quest;
            golfie = michal.taskDetails;
            offset = michal.thirdPartyTaskDetails;
            report = michal.withoutMarkdown;
            entity = michal.withSimplifiedCopy;
            backup = michal.currentUser;
            if(!entity) { _fun00010_ip = 181; continue _fun00009 }
 45:
            michal = _closure1_slot15;
            tangon = undefined;
            zuuluu = michal.bind(tangon)(oscard);
            michal = _closure1_slot9;
            michal = michal.PLAY;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2719; continue _fun00009 }
 76:
            michal = _closure1_slot9;
            michal = michal.STREAM;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2638; continue _fun00009 }
 93:
            michal = _closure1_slot9;
            michal = michal.WATCH_VIDEO;
            if(!(michal !== zuuluu)) { _fun00010_ip = 2579; continue _fun00009 }
 110:
            michal = _closure1_slot9;
            michal = michal.IN_GAME;
            if(!(michal === zuuluu)) { _fun00010_ip = 181; continue _fun00009 }
 124:
            zuuluu = _closure1_slot0;
            option = _closure1_slot1;
            michal = 6;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            option = michal.SharedQuestFields;
            zuuluu = option.build;
            michal = oscard.config;
            michal = zuuluu.bind(option)(michal);
            michal = michal.defaultInGameTask;
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00010_ip = 2572; continue _fun00009 }
 181:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            option = 8;
            option = zuuluu[option];
            romeon = undefined;
            foxtra = yankee.bind(romeon)(option);
            verify = foxtra.isPremium;
            option = _closure1_slot6;
            option = option.TIER_2;
            verify = verify.bind(foxtra)(backup, option);
            update = 7;
            option = zuuluu[update];
            backup = yankee.bind(romeon)(option);
            foxtra = backup.getCollectibleQuestRewardDuration;
            option = oscard.config;
            option = foxtra.bind(backup)(option);
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.isConsoleQuest;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(!zuuluu) { _fun00010_ip = 313; continue _fun00009 }
 279:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.shouldUsePlayOnDesktopTask;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(zuuluu) { _fun00010_ip = 2217; continue _fun00009 }
 313:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.isConsoleQuest;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(zuuluu) { _fun00010_ip = 1859; continue _fun00009 }
 347:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.shouldUsePlayOnDesktopTask;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(zuuluu) { _fun00010_ip = 1499; continue _fun00009 }
 381:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            foxtra = yankee.bind(romeon)(zuuluu);
            yankee = foxtra.isTieredRewardCodeQuest;
            zuuluu = {};
            zuuluu['quest'] = oscard;
            zuuluu = yankee.bind(foxtra)(zuuluu);
            if(zuuluu) { _fun00010_ip = 1380; continue _fun00009 }
 422:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.hasWatchVideoTasks;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(zuuluu) { _fun00010_ip = 1017; continue _fun00009 }
 456:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[update];
            yankee = yankee.bind(romeon)(zuuluu);
            zuuluu = yankee.hasPlayActivityTask;
            zuuluu = zuuluu.bind(yankee)(oscard);
            if(zuuluu) { _fun00010_ip = 863; continue _fun00009 }
 490:
            yankee = null;
            if(!(yankee == offset)) { _fun00010_ip = 853; continue _fun00009 }
 499:
            foxtra = {};
            foxtra['quest'] = oscard;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            foxtra['hasNitro'] = verify;
            foxtra['collectibleRewardDuration'] = option;
            zuuluu = foxtra.quest;
            result = foxtra.taskDetails;
            backup = foxtra.withoutMarkdown;
            ctrled = foxtra.hasNitro;
            sizing = foxtra.collectibleRewardDuration;
            vacuum = _closure1_slot0;
            foxtra = _closure1_slot1;
            kiloes = 6;
            kiloes = foxtra[kiloes];
            kiloes = vacuum.bind(romeon)(kiloes);
            source = kiloes.SharedQuestFields;
            echoed = source.build;
            kiloes = zuuluu.config;
            kiloes = echoed.bind(source)(kiloes);
            kiloes = kiloes.defaultReward;
            kiloes = kiloes.messages;
            kiloes = kiloes.nameWithArticle;
            result = result.targetMinutes;
            echoed = zuuluu.config;
            echoed = echoed.messages;
            echoed = echoed.gameTitle;
            source = foxtra[update];
            config = vacuum.bind(romeon)(source);
            sequen = config.isCollectibleQuestRewardPremiumExtendable;
            source = zuuluu.config;
            source = sequen.bind(config)(source);
            foxtra = foxtra[update];
            vacuum = vacuum.bind(romeon)(foxtra);
            foxtra = vacuum.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            zuuluu = zuuluu.config;
            zuuluu = foxtra.bind(vacuum)(zuuluu);
            foxtra = _closure1_slot12;
            if(!ctrled) { _fun00010_ip = 699; continue _fun00009 }
 696:
            if(source) { _fun00010_ip = 774; continue _fun00009 }
 699:
            if(source) { _fun00010_ip = 739; continue _fun00009 }
 702:
            if(!(yankee == sizing)) { _fun00010_ip = 739; continue _fun00009 }
 706:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            yankee = 5;
            yankee = ctrled[yankee];
            yankee = source.bind(romeon)(yankee);
            yankee = yankee.t;
            yankee = yankee.hkJ+Gh;
            _fun00010_ip = 772; continue _fun00009;
 739:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            yankee = source.BLyDvL;
 772:
            _fun00010_ip = 823; continue _fun00009;
 774:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            if(zuuluu) { _fun00010_ip = 812; continue _fun00009 }
 802:
            zuuluu = source.smG9qq;
            _fun00010_ip = 820; continue _fun00009;
 812:
            zuuluu = source.X8Yt//;
 820:
            yankee = zuuluu;
 823:
            zuuluu = {};
            zuuluu['gameTitle'] = echoed;
            zuuluu['streamingDurationRequirement'] = result;
            zuuluu['duration'] = sizing;
            zuuluu['questReward'] = kiloes;
            zuuluu = foxtra.bind(romeon)(yankee, zuuluu, backup);
            _fun00010_ip = 858; continue _fun00009;
 853:
            zuuluu = offset.description;
 858:
            _fun00010_ip = 1012; continue _fun00009;
 863:
            foxtra = {};
            foxtra['quest'] = oscard;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            offset = foxtra.quest;
            yankee = foxtra.taskDetails;
            backup = foxtra.withoutMarkdown;
            sizing = yankee.targetMinutes;
            yankee = _closure1_slot0;
            result = _closure1_slot1;
            foxtra = 6;
            foxtra = result[foxtra];
            foxtra = yankee.bind(romeon)(foxtra);
            kiloes = foxtra.SharedQuestFields;
            foxtra = kiloes.build;
            offset = offset.config;
            offset = foxtra.bind(kiloes)(offset);
            offset = offset.defaultReward;
            offset = offset.messages;
            kiloes = offset.nameWithArticle;
            foxtra = _closure1_slot12;
            offset = 5;
            offset = result[offset];
            offset = yankee.bind(romeon)(offset);
            offset = offset.t;
            yankee = offset.VYwSSk;
            offset = {};
            offset['streamingDurationRequirement'] = sizing;
            offset['questReward'] = kiloes;
            zuuluu = foxtra.bind(romeon)(yankee, offset, backup);
 1012:
            _fun00010_ip = 1378; continue _fun00009;
 1017:
            offset = oscard.config;
            foxtra = offset.videoMetadata;
            yankee = null;
            backup = yankee == foxtra;
            offset = undefined;
            if(backup) { _fun00010_ip = 1051; continue _fun00009 }
 1039:
            foxtra = foxtra.messages;
            offset = foxtra.videoTitle;
 1051:
            yankee = yankee != offset;
            kiloes = 'video';
            if(!yankee) { _fun00010_ip = 1065; continue _fun00009 }
 1062:
            kiloes = offset;
 1065:
            foxtra = _closure1_slot0;
            offset = _closure1_slot1;
            yankee = 6;
            yankee = offset[yankee];
            yankee = foxtra.bind(romeon)(yankee);
            sizing = yankee.SharedQuestFields;
            backup = sizing.build;
            yankee = oscard.config;
            yankee = backup.bind(sizing)(yankee);
            yankee = yankee.defaultReward;
            yankee = yankee.messages;
            backup = yankee.nameWithArticle;
            yankee = offset[update];
            result = foxtra.bind(romeon)(yankee);
            sizing = result.isCollectibleQuestRewardPremiumExtendable;
            yankee = oscard.config;
            yankee = sizing.bind(result)(yankee);
            offset = offset[update];
            sizing = foxtra.bind(romeon)(offset);
            foxtra = sizing.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            offset = oscard.config;
            offset = foxtra.bind(sizing)(offset);
            foxtra = _closure1_slot12;
            if(!yankee) { _fun00010_ip = 1185; continue _fun00009 }
 1182:
            if(verify) { _fun00010_ip = 1306; continue _fun00009 }
 1185:
            if(yankee) { _fun00010_ip = 1271; continue _fun00009 }
 1188:
            sizing = oscard.id;
            yankee = _closure1_slot4;
            if(!(sizing !== yankee)) { _fun00010_ip = 1236; continue _fun00009 }
 1201:
            sizing = _closure1_slot0;
            result = _closure1_slot1;
            yankee = 5;
            yankee = result[yankee];
            yankee = sizing.bind(romeon)(yankee);
            yankee = yankee.t;
            yankee = yankee.yMsQ7e;
            _fun00010_ip = 1269; continue _fun00009;
 1236:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            sizing = 5;
            sizing = echoed[sizing];
            sizing = result.bind(romeon)(sizing);
            sizing = sizing.t;
            yankee = sizing.Rsd5bG;
 1269:
            _fun00010_ip = 1304; continue _fun00009;
 1271:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            sizing = 5;
            sizing = echoed[sizing];
            sizing = result.bind(romeon)(sizing);
            sizing = sizing.t;
            yankee = sizing.W/HkLC;
 1304:
            _fun00010_ip = 1355; continue _fun00009;
 1306:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            sizing = 5;
            sizing = echoed[sizing];
            sizing = result.bind(romeon)(sizing);
            sizing = sizing.t;
            if(offset) { _fun00010_ip = 1344; continue _fun00009 }
 1334:
            offset = sizing.vs/xBg;
            _fun00010_ip = 1352; continue _fun00009;
 1344:
            offset = sizing.xqX+golfie;
 1352:
            yankee = offset;
 1355:
            offset = {};
            offset['videoTitle'] = kiloes;
            offset['rewardNameWithArticle'] = backup;
            offset['duration'] = option;
            zuuluu = foxtra.bind(romeon)(yankee, offset, report);
 1378:
            _fun00010_ip = 1494; continue _fun00009;
 1380:
            foxtra = {};
            foxtra['quest'] = oscard;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            offset = foxtra.quest;
            yankee = foxtra.taskDetails;
            backup = foxtra.withoutMarkdown;
            kiloes = yankee.targetMinutes;
            offset = offset.config;
            offset = offset.messages;
            sizing = offset.gameTitle;
            foxtra = _closure1_slot12;
            yankee = _closure1_slot0;
            result = _closure1_slot1;
            offset = 5;
            offset = result[offset];
            offset = yankee.bind(romeon)(offset);
            offset = offset.t;
            yankee = offset.a/ia7O;
            offset = {};
            offset['gameTitle'] = sizing;
            offset['streamingDurationRequirement'] = kiloes;
            zuuluu = foxtra.bind(romeon)(yankee, offset, backup);
 1494:
            _fun00010_ip = 1854; continue _fun00009;
 1499:
            foxtra = {};
            foxtra['quest'] = oscard;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            foxtra['hasNitro'] = verify;
            foxtra['collectibleRewardDuration'] = option;
            offset = foxtra.quest;
            yankee = foxtra.taskDetails;
            backup = foxtra.withoutMarkdown;
            source = foxtra.hasNitro;
            sizing = foxtra.collectibleRewardDuration;
            ctrled = _closure1_slot0;
            foxtra = _closure1_slot1;
            kiloes = 6;
            kiloes = foxtra[kiloes];
            kiloes = ctrled.bind(romeon)(kiloes);
            echoed = kiloes.SharedQuestFields;
            result = echoed.build;
            kiloes = offset.config;
            kiloes = result.bind(echoed)(kiloes);
            kiloes = kiloes.defaultReward;
            kiloes = kiloes.messages;
            kiloes = kiloes.nameWithArticle;
            result = yankee.targetMinutes;
            yankee = offset.config;
            yankee = yankee.messages;
            echoed = yankee.gameTitle;
            yankee = foxtra[update];
            sequen = ctrled.bind(romeon)(yankee);
            vacuum = sequen.isCollectibleQuestRewardPremiumExtendable;
            yankee = offset.config;
            yankee = vacuum.bind(sequen)(yankee);
            foxtra = foxtra[update];
            ctrled = ctrled.bind(romeon)(foxtra);
            foxtra = ctrled.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            offset = offset.config;
            offset = foxtra.bind(ctrled)(offset);
            foxtra = _closure1_slot12;
            if(!source) { _fun00010_ip = 1699; continue _fun00009 }
 1696:
            if(yankee) { _fun00010_ip = 1776; continue _fun00009 }
 1699:
            if(yankee) { _fun00010_ip = 1743; continue _fun00009 }
 1702:
            yankee = null;
            if(!(yankee == sizing)) { _fun00010_ip = 1743; continue _fun00009 }
 1708:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            yankee = 5;
            yankee = ctrled[yankee];
            yankee = source.bind(romeon)(yankee);
            yankee = yankee.t;
            yankee = yankee.FZL5Q0;
            _fun00010_ip = 1774; continue _fun00009;
 1743:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            yankee = source.AwuMRU;
 1774:
            _fun00010_ip = 1821; continue _fun00009;
 1776:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            if(offset) { _fun00010_ip = 1812; continue _fun00009 }
 1804:
            offset = source.ziB0HB;
            _fun00010_ip = 1818; continue _fun00009;
 1812:
            offset = source.eb/SnZ;
 1818:
            yankee = offset;
 1821:
            offset = {};
            offset['gameTitle'] = echoed;
            offset['streamingDurationRequirement'] = result;
            offset['rewardNameWithArticle'] = kiloes;
            offset['duration'] = sizing;
            offset['questReward'] = kiloes;
            zuuluu = foxtra.bind(romeon)(yankee, offset, backup);
 1854:
            _fun00010_ip = 2212; continue _fun00009;
 1859:
            foxtra = {};
            foxtra['quest'] = oscard;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            foxtra['hasNitro'] = verify;
            foxtra['collectibleRewardDuration'] = option;
            offset = foxtra.quest;
            yankee = foxtra.taskDetails;
            backup = foxtra.withoutMarkdown;
            source = foxtra.hasNitro;
            sizing = foxtra.collectibleRewardDuration;
            ctrled = _closure1_slot0;
            foxtra = _closure1_slot1;
            kiloes = 6;
            kiloes = foxtra[kiloes];
            kiloes = ctrled.bind(romeon)(kiloes);
            echoed = kiloes.SharedQuestFields;
            result = echoed.build;
            kiloes = offset.config;
            kiloes = result.bind(echoed)(kiloes);
            kiloes = kiloes.defaultReward;
            kiloes = kiloes.messages;
            result = kiloes.nameWithArticle;
            kiloes = yankee.targetMinutes;
            yankee = offset.config;
            yankee = yankee.messages;
            echoed = yankee.gameTitle;
            yankee = foxtra[update];
            sequen = ctrled.bind(romeon)(yankee);
            vacuum = sequen.isCollectibleQuestRewardPremiumExtendable;
            yankee = offset.config;
            yankee = vacuum.bind(sequen)(yankee);
            foxtra = foxtra[update];
            ctrled = ctrled.bind(romeon)(foxtra);
            foxtra = ctrled.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            offset = offset.config;
            offset = foxtra.bind(ctrled)(offset);
            foxtra = _closure1_slot12;
            if(!source) { _fun00010_ip = 2059; continue _fun00009 }
 2056:
            if(yankee) { _fun00010_ip = 2134; continue _fun00009 }
 2059:
            if(yankee) { _fun00010_ip = 2101; continue _fun00009 }
 2062:
            yankee = null;
            if(!(yankee == sizing)) { _fun00010_ip = 2101; continue _fun00009 }
 2068:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            yankee = 5;
            yankee = ctrled[yankee];
            yankee = source.bind(romeon)(yankee);
            yankee = yankee.t;
            yankee = yankee.NIimTk;
            _fun00010_ip = 2132; continue _fun00009;
 2101:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            yankee = source.AwuMRU;
 2132:
            _fun00010_ip = 2179; continue _fun00009;
 2134:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot1;
            source = 5;
            source = vacuum[source];
            source = ctrled.bind(romeon)(source);
            source = source.t;
            if(offset) { _fun00010_ip = 2170; continue _fun00009 }
 2162:
            offset = source.ziB0HB;
            _fun00010_ip = 2176; continue _fun00009;
 2170:
            offset = source.eb/SnZ;
 2176:
            yankee = offset;
 2179:
            offset = {};
            offset['gameTitle'] = echoed;
            offset['targetMinutes'] = kiloes;
            offset['rewardNameWithArticle'] = result;
            offset['duration'] = sizing;
            offset['streamingDurationRequirement'] = kiloes;
            zuuluu = foxtra.bind(romeon)(yankee, offset, backup);
 2212:
            _fun00010_ip = 2570; continue _fun00009;
 2217:
            offset = {};
            offset['quest'] = oscard;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            offset['hasNitro'] = verify;
            offset['collectibleRewardDuration'] = option;
            option = offset.quest;
            verify = offset.taskDetails;
            yankee = offset.withoutMarkdown;
            result = offset.hasNitro;
            backup = offset.collectibleRewardDuration;
            echoed = _closure1_slot0;
            offset = _closure1_slot1;
            foxtra = 6;
            foxtra = offset[foxtra];
            foxtra = echoed.bind(romeon)(foxtra);
            sizing = foxtra.SharedQuestFields;
            kiloes = sizing.build;
            foxtra = option.config;
            foxtra = kiloes.bind(sizing)(foxtra);
            foxtra = foxtra.defaultReward;
            foxtra = foxtra.messages;
            kiloes = foxtra.nameWithArticle;
            foxtra = verify.targetMinutes;
            verify = option.config;
            verify = verify.messages;
            sizing = verify.gameTitle;
            verify = offset[update];
            ctrled = echoed.bind(romeon)(verify);
            source = ctrled.isCollectibleQuestRewardPremiumExtendable;
            verify = option.config;
            verify = source.bind(ctrled)(verify);
            offset = offset[update];
            echoed = echoed.bind(romeon)(offset);
            offset = echoed.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            option = option.config;
            option = offset.bind(echoed)(option);
            offset = _closure1_slot12;
            if(!result) { _fun00010_ip = 2417; continue _fun00009 }
 2414:
            if(verify) { _fun00010_ip = 2492; continue _fun00009 }
 2417:
            if(verify) { _fun00010_ip = 2459; continue _fun00009 }
 2420:
            verify = null;
            if(!(verify == backup)) { _fun00010_ip = 2459; continue _fun00009 }
 2426:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            verify = 5;
            verify = echoed[verify];
            verify = result.bind(romeon)(verify);
            verify = verify.t;
            verify = verify.NIimTk;
            _fun00010_ip = 2490; continue _fun00009;
 2459:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(romeon)(result);
            result = result.t;
            verify = result.AwuMRU;
 2490:
            _fun00010_ip = 2537; continue _fun00009;
 2492:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            output = 5;
            output = echoed[output];
            output = result.bind(romeon)(output);
            output = output.t;
            if(option) { _fun00010_ip = 2528; continue _fun00009 }
 2520:
            option = output.ziB0HB;
            _fun00010_ip = 2534; continue _fun00009;
 2528:
            option = output.eb/SnZ;
 2534:
            verify = option;
 2537:
            option = {};
            option['gameTitle'] = sizing;
            option['streamingDurationRequirement'] = foxtra;
            option['rewardNameWithArticle'] = kiloes;
            option['duration'] = backup;
            option['targetMinutes'] = foxtra;
            zuuluu = offset.bind(romeon)(verify, option, yankee);
 2570:
            return zuuluu;
 2572:
            michal = michal.description;
            return michal;
 2579:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            michal = 5;
            zuuluu = offset[michal];
            zuuluu = verify.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            zuuluu = option.string;
            michal = offset[michal];
            michal = verify.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.f/J8v7;
            michal = zuuluu.bind(option)(michal);
            return michal;
 2638:
            option = _closure1_slot12;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 5;
            michal = verify[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.NmzoDg;
            michal = {};
            verify = golfie.targetMinutes;
            michal['targetMinutes'] = verify;
            verify = oscard.config;
            verify = verify.messages;
            verify = verify.gameTitle;
            michal['gameTitle'] = verify;
            michal = option.bind(tangon)(zuuluu, michal, report);
            return michal;
 2719:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot0;
            option = _closure1_slot1;
            entity = 5;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.goA6o6;
            entity = {};
            golfie = golfie.targetMinutes;
            entity['targetMinutes'] = golfie;
            oscard = oscard.config;
            oscard = oscard.messages;
            oscard = oscard.gameTitle;
            entity['gameTitle'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    tangon = function(argFoo) { // Original name: getQuestsInstructionsToWinReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot13;
            zuuluu = {};
            verify = zuuluu;
            option = entity;
            tangon = copyDataProperties(verify, option);
            oscard = entity.currentUser;
            tangon = null;
            if(!(tangon == oscard)) { _fun00012_ip = 47; continue _fun00011 }
 34:
            golfie = _closure1_slot3;
            tangon = golfie.getCurrentUser;
            oscard = tangon.bind(golfie)();
 47:
            tangon = 'currentUser';
            zuuluu[tangon] = oscard;
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = entity.withoutMarkdown;
            entity = zuuluu;
            if(!report) { _fun00012_ip = 84; continue _fun00011 }
 75:
            michal = _closure1_slot8;
            entity = michal.bind(tangon)(zuuluu);
 84:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    entity = function(argFoo) { // Original name: getSimplifiedQuestTaskType
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 7;
            entity = entity[oscard];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isConsoleQuest;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 223; continue _fun00013 }
 45:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.hasPlayActivityTask;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 223; continue _fun00013 }
 79:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            golfie = zuuluu.bind(report)(entity);
            zuuluu = golfie.hasStreamOnDesktopTask;
            entity = {};
            entity['quest'] = tangon;
            entity = zuuluu.bind(golfie)(entity);
            if(entity) { _fun00014_ip = 211; continue _fun00013 }
 117:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.hasWatchVideoTasks;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 199; continue _fun00013 }
 148:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isInGameQuest;
            entity = entity.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot9;
            if(entity) { _fun00014_ip = 191; continue _fun00013 }
 183:
            entity = zuuluu.PLAY;
            _fun00014_ip = 197; continue _fun00013;
 191:
            entity = zuuluu.IN_GAME;
 197:
            _fun00014_ip = 209; continue _fun00013;
 199:
            zuuluu = _closure1_slot9;
            entity = zuuluu.WATCH_VIDEO;
 209:
            _fun00014_ip = 221; continue _fun00013;
 211:
            zuuluu = _closure1_slot9;
            entity = zuuluu.STREAM;
 221:
            _fun00014_ip = 233; continue _fun00013;
 223:
            michal = _closure1_slot9;
            entity = michal.PLAY;
 233:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    romeon = 0;
    option = golfie[romeon];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    yankee = 1;
    option = golfie[yankee];
    report = argBaz;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    offset = 2;
    report = golfie[offset];
    report = oscard.bind(entity)(report);
    option = report.ORBS_INTRO_QUEST_ID;
    var _closure1_slot4 = option;
    report = report.QuestVariants;
    var _closure1_slot5 = report;
    verify = 3;
    report = golfie[verify];
    report = oscard.bind(entity)(report);
    report = report.PremiumTypes;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    foxtra = oscard.bind(entity)(report);
    option = foxtra.getQuestLogger;
    report = {};
    report = option.bind(foxtra)(report);
    var _closure1_slot7 = report;
    report = function(argFoo) { // Original name: astNodeToString
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = undefined;
            michal = undefined;
            oscard = undefined;
            golfie = undefined;
 11: // try_start_0
            michal = '';
            zuuluu = entity;
            tangon = 'string';
            zuuluu = typeof zuuluu;
            if(!(tangon !== zuuluu)) { _fun00016_ip = 157; continue _fun00015 }
 32:
            zuuluu = global;
            option = zuuluu.Array;
            tangon = option.isArray;
            zuuluu = entity;
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00016_ip = 78; continue _fun00015 }
 59:
            option = _closure1_slot8;
            zuuluu = entity;
            zuuluu = zuuluu.content;
            zuuluu = option.bind(report)(zuuluu);
 76: // try_end0
            return zuuluu;
 78: // try_start_1
            option = _closure1_slot10;
            zuuluu = entity;
            zuuluu = option.bind(report)(zuuluu);
            golfie = zuuluu;
            zuuluu = zuuluu.bind(report)();
            oscard = zuuluu;
            zuuluu = zuuluu.done;
            if(zuuluu) { _fun00016_ip = 155; continue _fun00015 }
 108:
            zuuluu = oscard;
            zuuluu = zuuluu.value;
            option = michal;
            verify = _closure1_slot8;
            zuuluu = zuuluu.content;
            zuuluu = verify.bind(report)(zuuluu);
            michal = option + zuuluu;
            zuuluu = golfie;
            zuuluu = zuuluu.bind(report)();
            oscard = zuuluu;
            zuuluu = zuuluu.done;
            if(!zuuluu) { _fun00016_ip = 108; continue _fun00015 }
 155: // try_end1
            return michal;
 157:
            return entity;
 159: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=3);
            zuuluu = _closure1_slot7;
            michal = zuuluu.error;
            entity = 'Failed to convert ASTNode to string';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = '';
            return entity;
        }
    };
    var _closure1_slot8 = report;
    report = {};
    report['PLAY'] = romeon;
    option = 'PLAY';
    report[romeon] = option;
    report['STREAM'] = yankee;
    option = 'STREAM';
    report[yankee] = option;
    report['WATCH_VIDEO'] = offset;
    option = 'WATCH_VIDEO';
    report[offset] = option;
    report['IN_GAME'] = verify;
    option = 'IN_GAME';
    report[verify] = option;
    var _closure1_slot9 = report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/hooks/QuestCopyHooks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: useQuestsInstructionsToWinReward
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            yankee = report.quest;
            verify = report.location;
            romeon = report.questContent;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 9;
            tangon = option[michal];
            zuuluu = undefined;
            offset = golfie.bind(zuuluu)(tangon);
            oscard = offset.useConnectedConsoleLinkOnClick;
            tangon = {};
            tangon['quest'] = yankee;
            tangon['questContent'] = romeon;
            offset = oscard.bind(offset)(tangon);
            tangon = 10;
            tangon = option[tangon];
            foxtra = golfie.bind(zuuluu)(tangon);
            romeon = foxtra.useStateFromStores;
            tangon = _closure1_slot3;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = romeon.bind(foxtra)(oscard, tangon);
            michal = option[michal];
            tangon = golfie.bind(zuuluu)(michal);
            michal = tangon.useThirdPartyTaskDetails;
            tangon = michal.bind(tangon)(yankee);
            michal = _closure1_slot14;
            entity = {};
            kiloes = entity;
            backup = report;
            report = copyDataProperties(kiloes, backup);
            report = 'connectedConsoleLinkOnClick';
            entity[report] = offset;
            offset = false;
            report = 'withoutMarkdown';
            entity[report] = offset;
            report = 11;
            report = option[report];
            option = golfie.bind(zuuluu)(report);
            golfie = option.useIsQuestBarCopySimplificationEnabled;
            report = {};
            report['location'] = verify;
            golfie = golfie.bind(option)(report);
            report = 'withSimplifiedCopy';
            entity[report] = golfie;
            report = 'currentUser';
            entity[report] = oscard;
            report = null;
            oscard = report != tangon;
            report = undefined;
            if(!oscard) { _fun00018_ip = 231; continue _fun00017 }
 228:
            report = tangon;
 231:
            tangon = 'thirdPartyTaskDetails';
            entity[tangon] = report;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['useQuestsInstructionsToWinReward'] = tangon;
    tangon = function(argFoo) { // Original name: usePrimaryCtaCopy
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.quest;
            verify = entity.location;
            option = entity.autoTrackExposure;
            oscard = undefined;
            if(!(option === oscard)) { _fun00020_ip = 28; continue _fun00019 }
 26:
            option = true;
 28:
            entity = function(argFoo) { // Original name: useSimplifiedQuestTaskType
                report = argFoo;
                var _closure3_slot0 = report;
                tangon = _closure1_slot2;
                zuuluu = tangon.useMemo;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    zuuluu = _closure1_slot15;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report = entity.bind(oscard)(zuuluu);
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 11;
            entity = golfie[entity];
            golfie = tangon.bind(oscard)(entity);
            tangon = golfie.useIsQuestBarCopySimplificationEnabled;
            entity = {};
            entity['location'] = verify;
            entity['autoTrackExposure'] = option;
            entity = tangon.bind(golfie)(entity);
            tangon = _closure1_slot9;
            tangon = tangon.PLAY;
            if(!(tangon !== report)) { _fun00020_ip = 394; continue _fun00019 }
 104:
            tangon = _closure1_slot9;
            tangon = tangon.STREAM;
            if(!(tangon !== report)) { _fun00020_ip = 319; continue _fun00019 }
 121:
            tangon = _closure1_slot9;
            tangon = tangon.WATCH_VIDEO;
            if(!(tangon !== report)) { _fun00020_ip = 260; continue _fun00019 }
 138:
            tangon = _closure1_slot9;
            tangon = tangon.IN_GAME;
            if(!(tangon !== report)) { _fun00020_ip = 154; continue _fun00019 }
 152:
            return oscard;
 154:
            zuuluu = zuuluu.config;
            report = zuuluu.features;
            tangon = report.includes;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.START_QUEST_CTA;
            zuuluu = tangon.bind(report)(zuuluu);
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 5;
            report = verify[tangon];
            report = option.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            tangon = verify[tangon];
            tangon = option.bind(oscard)(tangon);
            tangon = tangon.t;
            if(zuuluu) { _fun00020_ip = 245; continue _fun00019 }
 232:
            zuuluu = tangon.l7E81t;
            zuuluu = report.bind(golfie)(zuuluu);
            _fun00020_ip = 258; continue _fun00019;
 245:
            tangon = tangon.ToGcxM;
            zuuluu = report.bind(golfie)(tangon);
 258:
            return zuuluu;
 260:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.umdNio;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 319:
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            report = option[zuuluu];
            report = tangon.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.string;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.t;
            if(entity) { _fun00020_ip = 379; continue _fun00019 }
 366:
            zuuluu = tangon.l7E81t;
            zuuluu = report.bind(golfie)(zuuluu);
            _fun00020_ip = 392; continue _fun00019;
 379:
            tangon = tangon.hyrGU1;
            zuuluu = report.bind(golfie)(tangon);
 392:
            return zuuluu;
 394:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00020_ip = 454; continue _fun00019 }
 441:
            entity = michal.l7E81t;
            entity = zuuluu.bind(tangon)(entity);
            _fun00020_ip = 467; continue _fun00019;
 454:
            michal = michal.Y7LIPT;
            entity = zuuluu.bind(tangon)(michal);
 467:
            return entity;
        }
    };
    zuuluu['usePrimaryCtaCopy'] = tangon;
    michal = function(argFoo) { // Original name: usePremiumExtendableCopy
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot2;
            report = oscard.useMemo;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isCollectibleQuestRewardPremiumExtendable;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(michal, tangon);
            report = oscard.useMemo;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = report.bind(oscard)(entity, michal);
            entity = null;
            if(!tangon) { _fun00022_ip = 153; continue _fun00021 }
 73:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00022_ip = 137; continue _fun00021 }
 122:
            michal = zuuluu.GYGb3N;
            michal = tangon.bind(report)(michal);
            _fun00022_ip = 150; continue _fun00021;
 137:
            zuuluu = zuuluu.hh7Rb2;
            michal = tangon.bind(report)(zuuluu);
 150:
            entity = michal;
 153:
            return entity;
        }
    };
    zuuluu['usePremiumExtendableCopy'] = michal;
    return entity;
})();