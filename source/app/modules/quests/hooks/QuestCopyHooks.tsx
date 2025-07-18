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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
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
            entity = argFoo;
            option = entity.quest;
            golfie = entity.taskDetails;
            offset = entity.thirdPartyTaskDetails;
            report = entity.withoutMarkdown;
            romeon = entity.currentUser;
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            michal = 8;
            michal = entity[michal];
            oscard = undefined;
            verify = tangon.bind(oscard)(michal);
            zuuluu = verify.isPremium;
            michal = _closure1_slot6;
            michal = michal.TIER_2;
            zuuluu = zuuluu.bind(verify)(romeon, michal);
            backup = 7;
            michal = entity[backup];
            romeon = tangon.bind(oscard)(michal);
            verify = romeon.getCollectibleQuestRewardDuration;
            michal = option.config;
            michal = verify.bind(romeon)(michal);
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isConsoleQuest;
            entity = entity.bind(tangon)(option);
            if(!entity) { _fun00010_ip = 165; continue _fun00009 }
 131:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.shouldUsePlayOnDesktopTask;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 2042; continue _fun00009 }
 165:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isConsoleQuest;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 1696; continue _fun00009 }
 199:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.shouldUsePlayOnDesktopTask;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00010_ip = 1348; continue _fun00009 }
 233:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            verify = tangon.bind(oscard)(entity);
            tangon = verify.isTieredRewardCodeQuest;
            entity = {};
            entity['quest'] = option;
            entity = tangon.bind(verify)(entity);
            if(entity) { _fun00010_ip = 1229; continue _fun00009 }
 274:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[backup];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.hasWatchVideoTasks;
            entity = entity.bind(tangon)(option);
            verify = _closure1_slot0;
            tangon = _closure1_slot1;
            if(entity) { _fun00010_ip = 845; continue _fun00009 }
 316:
            entity = tangon[backup];
            romeon = verify.bind(oscard)(entity);
            entity = romeon.hasPlayActivityTask;
            entity = entity.bind(romeon)(option);
            if(entity) { _fun00010_ip = 703; continue _fun00009 }
 342:
            romeon = null;
            if(!(romeon == offset)) { _fun00010_ip = 693; continue _fun00009 }
 351:
            foxtra = {};
            foxtra['quest'] = option;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            foxtra['hasNitro'] = zuuluu;
            foxtra['collectibleRewardDuration'] = michal;
            entity = foxtra.quest;
            result = foxtra.taskDetails;
            kiloes = foxtra.withoutMarkdown;
            source = foxtra.hasNitro;
            output = foxtra.collectibleRewardDuration;
            ctrled = _closure1_slot0;
            foxtra = _closure1_slot1;
            sizing = 6;
            sizing = foxtra[sizing];
            sizing = ctrled.bind(oscard)(sizing);
            update = sizing.SharedQuestFields;
            echoed = update.build;
            sizing = entity.config;
            sizing = echoed.bind(update)(sizing);
            sizing = sizing.defaultRewardNameWithArticle;
            result = result.targetMinutes;
            echoed = entity.config;
            echoed = echoed.messages;
            echoed = echoed.gameTitle;
            update = foxtra[backup];
            sequen = ctrled.bind(oscard)(update);
            vacuum = sequen.isCollectibleQuestRewardPremiumExtendable;
            update = entity.config;
            update = vacuum.bind(sequen)(update);
            foxtra = foxtra[backup];
            ctrled = ctrled.bind(oscard)(foxtra);
            foxtra = ctrled.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            entity = entity.config;
            entity = foxtra.bind(ctrled)(entity);
            foxtra = _closure1_slot12;
            if(!source) { _fun00010_ip = 539; continue _fun00009 }
 536:
            if(update) { _fun00010_ip = 614; continue _fun00009 }
 539:
            if(update) { _fun00010_ip = 579; continue _fun00009 }
 542:
            if(!(romeon == output)) { _fun00010_ip = 579; continue _fun00009 }
 546:
            update = _closure1_slot0;
            source = _closure1_slot1;
            romeon = 5;
            romeon = source[romeon];
            romeon = update.bind(oscard)(romeon);
            romeon = romeon.t;
            romeon = romeon.hkJ+Gh;
            _fun00010_ip = 612; continue _fun00009;
 579:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 5;
            update = ctrled[update];
            update = source.bind(oscard)(update);
            update = update.t;
            romeon = update.BLyDvL;
 612:
            _fun00010_ip = 663; continue _fun00009;
 614:
            source = _closure1_slot0;
            ctrled = _closure1_slot1;
            update = 5;
            update = ctrled[update];
            update = source.bind(oscard)(update);
            update = update.t;
            if(entity) { _fun00010_ip = 652; continue _fun00009 }
 642:
            entity = update.smG9qq;
            _fun00010_ip = 660; continue _fun00009;
 652:
            entity = update.X8Yt//;
 660:
            romeon = entity;
 663:
            entity = {};
            entity['gameTitle'] = echoed;
            entity['streamingDurationRequirement'] = result;
            entity['duration'] = output;
            entity['questReward'] = sizing;
            entity = foxtra.bind(oscard)(romeon, entity, kiloes);
            _fun00010_ip = 698; continue _fun00009;
 693:
            entity = offset.description;
 698:
            _fun00010_ip = 840; continue _fun00009;
 703:
            foxtra = {};
            foxtra['quest'] = option;
            foxtra['taskDetails'] = golfie;
            foxtra['withoutMarkdown'] = report;
            offset = foxtra.quest;
            romeon = foxtra.taskDetails;
            kiloes = foxtra.withoutMarkdown;
            output = romeon.targetMinutes;
            romeon = _closure1_slot0;
            result = _closure1_slot1;
            foxtra = 6;
            foxtra = result[foxtra];
            foxtra = romeon.bind(oscard)(foxtra);
            sizing = foxtra.SharedQuestFields;
            foxtra = sizing.build;
            offset = offset.config;
            offset = foxtra.bind(sizing)(offset);
            sizing = offset.defaultRewardNameWithArticle;
            foxtra = _closure1_slot12;
            offset = 5;
            offset = result[offset];
            offset = romeon.bind(oscard)(offset);
            offset = offset.t;
            romeon = offset.VYwSSk;
            offset = {};
            offset['streamingDurationRequirement'] = output;
            offset['questReward'] = sizing;
            entity = foxtra.bind(oscard)(romeon, offset, kiloes);
 840:
            _fun00010_ip = 1227; continue _fun00009;
 845:
            romeon = 6;
            tangon = tangon[romeon];
            tangon = verify.bind(oscard)(tangon);
            offset = tangon.SharedQuestFields;
            verify = offset.build;
            tangon = option.config;
            tangon = verify.bind(offset)(tangon);
            offset = tangon.defaultWatchVideoTask;
            verify = null;
            foxtra = verify == offset;
            tangon = undefined;
            if(foxtra) { _fun00010_ip = 908; continue _fun00009 }
 896:
            offset = offset.messages;
            tangon = offset.videoTitle;
 908:
            offset = verify != tangon;
            foxtra = 'video';
            if(!offset) { _fun00010_ip = 922; continue _fun00009 }
 919:
            foxtra = tangon;
 922:
            offset = _closure1_slot0;
            tangon = _closure1_slot1;
            romeon = tangon[romeon];
            romeon = offset.bind(oscard)(romeon);
            sizing = romeon.SharedQuestFields;
            kiloes = sizing.build;
            romeon = option.config;
            romeon = kiloes.bind(sizing)(romeon);
            romeon = romeon.defaultRewardNameWithArticle;
            kiloes = tangon[backup];
            output = offset.bind(oscard)(kiloes);
            sizing = output.isCollectibleQuestRewardPremiumExtendable;
            kiloes = option.config;
            kiloes = sizing.bind(output)(kiloes);
            tangon = tangon[backup];
            sizing = offset.bind(oscard)(tangon);
            offset = sizing.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = option.config;
            tangon = offset.bind(sizing)(tangon);
            offset = _closure1_slot12;
            if(!kiloes) { _fun00010_ip = 1030; continue _fun00009 }
 1024:
            if(zuuluu) { _fun00010_ip = 1155; continue _fun00009 }
 1030:
            if(kiloes) { _fun00010_ip = 1120; continue _fun00009 }
 1033:
            if(!(verify == michal)) { _fun00010_ip = 1120; continue _fun00009 }
 1037:
            kiloes = option.id;
            verify = _closure1_slot4;
            if(!(kiloes !== verify)) { _fun00010_ip = 1085; continue _fun00009 }
 1050:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot1;
            verify = 5;
            verify = sizing[verify];
            verify = kiloes.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.g+InPD;
            _fun00010_ip = 1118; continue _fun00009;
 1085:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            verify = kiloes.Rsd5bG;
 1118:
            _fun00010_ip = 1153; continue _fun00009;
 1120:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            verify = kiloes.W/HkLC;
 1153:
            _fun00010_ip = 1204; continue _fun00009;
 1155:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kiloes = 5;
            kiloes = output[kiloes];
            kiloes = sizing.bind(oscard)(kiloes);
            kiloes = kiloes.t;
            if(tangon) { _fun00010_ip = 1193; continue _fun00009 }
 1183:
            tangon = kiloes.vs/xBg;
            _fun00010_ip = 1201; continue _fun00009;
 1193:
            tangon = kiloes.xqX+golfie;
 1201:
            verify = tangon;
 1204:
            tangon = {};
            tangon['videoTitle'] = foxtra;
            tangon['rewardNameWithArticle'] = romeon;
            tangon['duration'] = michal;
            entity = offset.bind(oscard)(verify, tangon, report);
 1227:
            _fun00010_ip = 1343; continue _fun00009;
 1229:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            foxtra = verify.targetMinutes;
            tangon = tangon.config;
            tangon = tangon.messages;
            kiloes = tangon.gameTitle;
            offset = _closure1_slot12;
            verify = _closure1_slot0;
            sizing = _closure1_slot1;
            tangon = 5;
            tangon = sizing[tangon];
            tangon = verify.bind(oscard)(tangon);
            tangon = tangon.t;
            verify = tangon.a/ia7O;
            tangon = {};
            tangon['gameTitle'] = kiloes;
            tangon['streamingDurationRequirement'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 1343:
            _fun00010_ip = 1691; continue _fun00009;
 1348:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            offset['hasNitro'] = zuuluu;
            offset['collectibleRewardDuration'] = michal;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            result = offset.hasNitro;
            kiloes = offset.collectibleRewardDuration;
            echoed = _closure1_slot0;
            offset = _closure1_slot1;
            foxtra = 6;
            foxtra = offset[foxtra];
            foxtra = echoed.bind(oscard)(foxtra);
            output = foxtra.SharedQuestFields;
            sizing = output.build;
            foxtra = tangon.config;
            foxtra = sizing.bind(output)(foxtra);
            foxtra = foxtra.defaultRewardNameWithArticle;
            sizing = verify.targetMinutes;
            verify = tangon.config;
            verify = verify.messages;
            output = verify.gameTitle;
            verify = offset[backup];
            source = echoed.bind(oscard)(verify);
            update = source.isCollectibleQuestRewardPremiumExtendable;
            verify = tangon.config;
            verify = update.bind(source)(verify);
            offset = offset[backup];
            echoed = echoed.bind(oscard)(offset);
            offset = echoed.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = tangon.config;
            tangon = offset.bind(echoed)(tangon);
            offset = _closure1_slot12;
            if(!result) { _fun00010_ip = 1536; continue _fun00009 }
 1533:
            if(verify) { _fun00010_ip = 1613; continue _fun00009 }
 1536:
            if(verify) { _fun00010_ip = 1580; continue _fun00009 }
 1539:
            verify = null;
            if(!(verify == kiloes)) { _fun00010_ip = 1580; continue _fun00009 }
 1545:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            verify = 5;
            verify = echoed[verify];
            verify = result.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.FZL5Q0;
            _fun00010_ip = 1611; continue _fun00009;
 1580:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            verify = result.AwuMRU;
 1611:
            _fun00010_ip = 1658; continue _fun00009;
 1613:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            if(tangon) { _fun00010_ip = 1649; continue _fun00009 }
 1641:
            tangon = result.ziB0HB;
            _fun00010_ip = 1655; continue _fun00009;
 1649:
            tangon = result.eb/SnZ;
 1655:
            verify = tangon;
 1658:
            tangon = {};
            tangon['gameTitle'] = output;
            tangon['streamingDurationRequirement'] = sizing;
            tangon['rewardNameWithArticle'] = foxtra;
            tangon['duration'] = kiloes;
            tangon['questReward'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 1691:
            _fun00010_ip = 2037; continue _fun00009;
 1696:
            offset = {};
            offset['quest'] = option;
            offset['taskDetails'] = golfie;
            offset['withoutMarkdown'] = report;
            offset['hasNitro'] = zuuluu;
            offset['collectibleRewardDuration'] = michal;
            tangon = offset.quest;
            verify = offset.taskDetails;
            romeon = offset.withoutMarkdown;
            result = offset.hasNitro;
            kiloes = offset.collectibleRewardDuration;
            echoed = _closure1_slot0;
            offset = _closure1_slot1;
            foxtra = 6;
            foxtra = offset[foxtra];
            foxtra = echoed.bind(oscard)(foxtra);
            output = foxtra.SharedQuestFields;
            sizing = output.build;
            foxtra = tangon.config;
            foxtra = sizing.bind(output)(foxtra);
            sizing = foxtra.defaultRewardNameWithArticle;
            foxtra = verify.targetMinutes;
            verify = tangon.config;
            verify = verify.messages;
            output = verify.gameTitle;
            verify = offset[backup];
            source = echoed.bind(oscard)(verify);
            update = source.isCollectibleQuestRewardPremiumExtendable;
            verify = tangon.config;
            verify = update.bind(source)(verify);
            offset = offset[backup];
            echoed = echoed.bind(oscard)(offset);
            offset = echoed.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            tangon = tangon.config;
            tangon = offset.bind(echoed)(tangon);
            offset = _closure1_slot12;
            if(!result) { _fun00010_ip = 1884; continue _fun00009 }
 1881:
            if(verify) { _fun00010_ip = 1959; continue _fun00009 }
 1884:
            if(verify) { _fun00010_ip = 1926; continue _fun00009 }
 1887:
            verify = null;
            if(!(verify == kiloes)) { _fun00010_ip = 1926; continue _fun00009 }
 1893:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            verify = 5;
            verify = echoed[verify];
            verify = result.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.NIimTk;
            _fun00010_ip = 1957; continue _fun00009;
 1926:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            verify = result.AwuMRU;
 1957:
            _fun00010_ip = 2004; continue _fun00009;
 1959:
            echoed = _closure1_slot0;
            update = _closure1_slot1;
            result = 5;
            result = update[result];
            result = echoed.bind(oscard)(result);
            result = result.t;
            if(tangon) { _fun00010_ip = 1995; continue _fun00009 }
 1987:
            tangon = result.ziB0HB;
            _fun00010_ip = 2001; continue _fun00009;
 1995:
            tangon = result.eb/SnZ;
 2001:
            verify = tangon;
 2004:
            tangon = {};
            tangon['gameTitle'] = output;
            tangon['targetMinutes'] = foxtra;
            tangon['rewardNameWithArticle'] = sizing;
            tangon['duration'] = kiloes;
            tangon['streamingDurationRequirement'] = foxtra;
            entity = offset.bind(oscard)(verify, tangon, romeon);
 2037:
            _fun00010_ip = 2383; continue _fun00009;
 2042:
            tangon = {};
            tangon['quest'] = option;
            tangon['taskDetails'] = golfie;
            tangon['withoutMarkdown'] = report;
            tangon['hasNitro'] = zuuluu;
            tangon['collectibleRewardDuration'] = michal;
            michal = tangon.quest;
            zuuluu = tangon.taskDetails;
            report = tangon.withoutMarkdown;
            romeon = tangon.hasNitro;
            option = tangon.collectibleRewardDuration;
            foxtra = _closure1_slot0;
            tangon = _closure1_slot1;
            golfie = 6;
            golfie = tangon[golfie];
            golfie = foxtra.bind(oscard)(golfie);
            offset = golfie.SharedQuestFields;
            verify = offset.build;
            golfie = michal.config;
            golfie = verify.bind(offset)(golfie);
            verify = golfie.defaultRewardNameWithArticle;
            golfie = zuuluu.targetMinutes;
            zuuluu = michal.config;
            zuuluu = zuuluu.messages;
            offset = zuuluu.gameTitle;
            zuuluu = tangon[backup];
            sizing = foxtra.bind(oscard)(zuuluu);
            kiloes = sizing.isCollectibleQuestRewardPremiumExtendable;
            zuuluu = michal.config;
            zuuluu = kiloes.bind(sizing)(zuuluu);
            tangon = tangon[backup];
            foxtra = foxtra.bind(oscard)(tangon);
            tangon = foxtra.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            michal = michal.config;
            michal = tangon.bind(foxtra)(michal);
            tangon = _closure1_slot12;
            if(!romeon) { _fun00010_ip = 2230; continue _fun00009 }
 2227:
            if(zuuluu) { _fun00010_ip = 2305; continue _fun00009 }
 2230:
            if(zuuluu) { _fun00010_ip = 2272; continue _fun00009 }
 2233:
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00010_ip = 2272; continue _fun00009 }
 2239:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            zuuluu = 5;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NIimTk;
            _fun00010_ip = 2303; continue _fun00009;
 2272:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            romeon = 5;
            romeon = backup[romeon];
            romeon = foxtra.bind(oscard)(romeon);
            romeon = romeon.t;
            zuuluu = romeon.AwuMRU;
 2303:
            _fun00010_ip = 2350; continue _fun00009;
 2305:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 5;
            yankee = foxtra[yankee];
            yankee = romeon.bind(oscard)(yankee);
            yankee = yankee.t;
            if(michal) { _fun00010_ip = 2341; continue _fun00009 }
 2333:
            michal = yankee.ziB0HB;
            _fun00010_ip = 2347; continue _fun00009;
 2341:
            michal = yankee.eb/SnZ;
 2347:
            zuuluu = michal;
 2350:
            michal = {};
            michal['gameTitle'] = offset;
            michal['streamingDurationRequirement'] = golfie;
            michal['rewardNameWithArticle'] = verify;
            michal['duration'] = option;
            michal['targetMinutes'] = golfie;
            entity = tangon.bind(oscard)(zuuluu, michal, report);
 2383:
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
    entity = function(argFoo) { // Original name: useSimplifiedQuestTaskType
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 7;
                entity = entity[oscard];
                report = undefined;
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isConsoleQuest;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 227; continue _fun00013 }
 49:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.hasPlayActivityTask;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 227; continue _fun00013 }
 83:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                golfie = zuuluu.bind(report)(entity);
                zuuluu = golfie.hasStreamOnDesktopTask;
                entity = {};
                entity['quest'] = tangon;
                entity = zuuluu.bind(golfie)(entity);
                if(entity) { _fun00014_ip = 215; continue _fun00013 }
 121:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.hasWatchVideoTasks;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 203; continue _fun00013 }
 152:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isInGameQuest;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = _closure1_slot9;
                if(entity) { _fun00014_ip = 195; continue _fun00013 }
 187:
                entity = zuuluu.PLAY;
                _fun00014_ip = 201; continue _fun00013;
 195:
                entity = zuuluu.IN_GAME;
 201:
                _fun00014_ip = 213; continue _fun00013;
 203:
                zuuluu = _closure1_slot9;
                entity = zuuluu.WATCH_VIDEO;
 213:
                _fun00014_ip = 225; continue _fun00013;
 215:
                zuuluu = _closure1_slot9;
                entity = zuuluu.STREAM;
 225:
                _fun00014_ip = 237; continue _fun00013;
 227:
                michal = _closure1_slot9;
                entity = michal.PLAY;
 237:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
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
    report = 11;
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
            option = report.quest;
            romeon = report.questContent;
            yankee = report.sourceQuestContent;
            tangon = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 9;
            oscard = verify[michal];
            zuuluu = undefined;
            offset = tangon.bind(zuuluu)(oscard);
            golfie = offset.useConnectedConsoleLinkOnClick;
            oscard = {};
            oscard['quest'] = option;
            oscard['questContent'] = romeon;
            oscard['sourceQuestContent'] = yankee;
            golfie = golfie.bind(offset)(oscard);
            oscard = 10;
            oscard = verify[oscard];
            romeon = tangon.bind(zuuluu)(oscard);
            yankee = romeon.useStateFromStores;
            oscard = _closure1_slot3;
            offset = new Array(1);
            offset[0] = oscard;
            oscard = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = yankee.bind(romeon)(offset, oscard);
            michal = verify[michal];
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.useThirdPartyTaskDetails;
            tangon = michal.bind(tangon)(option);
            michal = _closure1_slot14;
            entity = {};
            kiloes = entity;
            backup = report;
            report = copyDataProperties(kiloes, backup);
            report = 'connectedConsoleLinkOnClick';
            entity[report] = golfie;
            golfie = false;
            report = 'withoutMarkdown';
            entity[report] = golfie;
            report = 'currentUser';
            entity[report] = oscard;
            report = null;
            oscard = report != tangon;
            report = undefined;
            if(!oscard) { _fun00018_ip = 199; continue _fun00017 }
 196:
            report = tangon;
 199:
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
            michal = entity.quest;
            zuuluu = _closure1_slot15;
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.PLAY;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 255; continue _fun00019 }
 40:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 255; continue _fun00019 }
 57:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.WATCH_VIDEO;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 196; continue _fun00019 }
 74:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.IN_GAME;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 90; continue _fun00019 }
 88:
            return report;
 90:
            michal = michal.config;
            tangon = michal.features;
            zuuluu = tangon.includes;
            michal = _closure1_slot5;
            michal = michal.START_QUEST_CTA;
            michal = zuuluu.bind(tangon)(michal);
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            tangon = option[zuuluu];
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00020_ip = 181; continue _fun00019 }
 168:
            michal = zuuluu.l7E81t;
            michal = tangon.bind(oscard)(michal);
            _fun00020_ip = 194; continue _fun00019;
 181:
            zuuluu = zuuluu.ToGcxM;
            michal = tangon.bind(oscard)(zuuluu);
 194:
            return michal;
 196:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.umdNio;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 255:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.l7E81t;
            entity = michal.bind(zuuluu)(entity);
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
            oscard = _closure1_slot2;
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
            if(!tangon) { _fun00022_ip = 157; continue _fun00021 }
 77:
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
            if(michal) { _fun00022_ip = 141; continue _fun00021 }
 126:
            michal = zuuluu.GYGb3N;
            michal = tangon.bind(report)(michal);
            _fun00022_ip = 154; continue _fun00021;
 141:
            zuuluu = zuuluu.hh7Rb2;
            michal = tangon.bind(report)(zuuluu);
 154:
            entity = michal;
 157:
            return entity;
        }
    };
    zuuluu['usePremiumExtendableCopy'] = michal;
    return entity;
})();