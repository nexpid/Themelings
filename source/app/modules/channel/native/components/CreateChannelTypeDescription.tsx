// app/modules/channel/native/components/CreateChannelTypeDescription.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildProfileFetchStatus;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/native/components/CreateChannelTypeDescription.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: CreateChannelTypeDescription
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            oscard = entity.channelType;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            entity = 5;
            entity = option[entity];
            report = undefined;
            michal = golfie.bind(report)(entity);
            entity = michal.useGuildProfile;
            entity = entity.bind(michal)(yankee);
            michal = entity.guildProfile;
            offset = entity.fetchGuildProfile;
            var _closure2_slot0 = offset;
            tangon = entity.fetchStatus;
            entity = 6;
            entity = option[entity];
            option = golfie.bind(report)(entity);
            golfie = option.useIsGuildSettingsFoundationExperimentEnabled;
            entity = {'guildId': null, 'location': 'channel_create', 'autoTrackExposure': true};
            entity['guildId'] = yankee;
            option = golfie.bind(option)(entity);
            entity = _closure1_slot4;
            entity = entity.FETCHED;
            golfie = tangon !== entity;
            entity = null;
            tangon = entity != michal;
            if(!tangon) { _fun00002_ip = 188; continue _fun00001 }
 140:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            romeon = 7;
            romeon = backup[romeon];
            romeon = foxtra.bind(report)(romeon);
            romeon = romeon.GuildProfileVisibilitySets;
            foxtra = romeon.VISIBLE;
            romeon = foxtra.has;
            michal = michal.visibility;
            tangon = romeon.bind(foxtra)(michal);
 188:
            michal = !golfie;
            if(golfie) { _fun00002_ip = 197; continue _fun00001 }
 194:
            michal = !tangon;
 197:
            if(!michal) { _fun00002_ip = 214; continue _fun00001 }
 200:
            tangon = _closure1_slot5;
            tangon = tangon.GUILD_ANNOUNCEMENT;
            michal = oscard === tangon;
 214:
            golfie = _closure1_slot2;
            oscard = golfie.useEffect;
            tangon = new Array(2);
            tangon[0] = yankee;
            tangon[1] = offset;
            zuuluu = function() {
                michal = _closure2_slot0;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, tangon);
            entity = null;
            if(!michal) { _fun00002_ip = 394; continue _fun00001 }
 254:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot3;
            michal = {};
            golfie = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 8;
            oscard = offset[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            verify = 9;
            offset = foxtra[verify];
            offset = romeon.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(report)(verify);
            verify = verify.t;
            if(option) { _fun00002_ip = 363; continue _fun00001 }
 350:
            option = verify./8VkyM;
            option = offset.bind(yankee)(option);
            _fun00002_ip = 374; continue _fun00001;
 363:
            verify = verify.2Ab4IS;
            option = offset.bind(yankee)(verify);
 374:
            oscard['children'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 394:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();