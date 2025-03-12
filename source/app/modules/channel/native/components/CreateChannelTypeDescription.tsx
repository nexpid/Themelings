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
            offset = entity.guildId;
            golfie = entity.channelType;
            option = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 5;
            entity = yankee[entity];
            report = undefined;
            michal = option.bind(report)(entity);
            entity = michal.useGuildProfile;
            entity = entity.bind(michal)(offset);
            michal = entity.guildProfile;
            verify = entity.fetchGuildProfile;
            var _closure2_slot0 = verify;
            tangon = entity.fetchStatus;
            entity = 6;
            entity = yankee[entity];
            yankee = option.bind(report)(entity);
            option = yankee.useIsGuildSettingsFoundationExperimentEnabled;
            entity = {'guildId': null, 'location': 'channel_create', 'autoTrackExposure': true};
            entity['guildId'] = offset;
            option = option.bind(yankee)(entity);
            entity = _closure1_slot4;
            entity = entity.FETCHED;
            yankee = tangon !== entity;
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
            michal = !yankee;
            if(yankee) { _fun00002_ip = 197; continue _fun00001 }
 194:
            michal = option;
 197:
            if(!michal) { _fun00002_ip = 203; continue _fun00001 }
 200:
            michal = !tangon;
 203:
            if(!michal) { _fun00002_ip = 220; continue _fun00001 }
 206:
            tangon = _closure1_slot5;
            tangon = tangon.GUILD_ANNOUNCEMENT;
            michal = golfie === tangon;
 220:
            option = _closure1_slot2;
            golfie = option.useEffect;
            tangon = new Array(2);
            tangon[0] = offset;
            tangon[1] = verify;
            zuuluu = function() {
                michal = _closure2_slot0;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = golfie.bind(option)(zuuluu, tangon);
            entity = null;
            if(!michal) { _fun00002_ip = 375; continue _fun00001 }
 257:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot3;
            michal = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            oscard = 8;
            oscard = romeon[oscard];
            oscard = yankee.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
            option = 9;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.t;
            option = option.2Ab4IS;
            option = verify.bind(offset)(option);
            oscard['children'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 375:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();