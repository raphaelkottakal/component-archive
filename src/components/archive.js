import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ShowMore from './showMore';
import ImageChild from './imageChild';


export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			// backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	render() {

		let linedTitle = {
			textTransform: 'uppercase',
			textAlign: 'center',
			borderTop: '1px solid lightgray',
			borderBottom: '1px solid lightgray',
			margin: '16px 0',
			padding: '4px 0',
			fontSize: 12,
			letterSpacing: 2
		},
			showMoreTitle = {
				fontSize: 25,
				fontFamily: 'Lora, serif',
				textTransform: 'uppercase',
		},
			showMoreText = {
				fontStyle: 'italic',
				fontSize: 12
		},
			showMoreShop = {
				textTransform: 'uppercase',
				fontSize: 10,
				backgroundColor: '#000',
				color: '#fff',
				display: 'inline-block',
				padding: '4px 8px',
				marginTop: 8,
				letterSpacing: 2,
				textDecoration: 'none'
		};

		let showMoreTextObj = {
			trendsetter: 'You\'re stylish and you know it! You don\'t shy away from trying the latest trends and always make them your own.',
			classic: 'Your style is timeless, just like you. You never seem to disappoint with your elegant fashion sensibilities.',
			contemporary: 'Urban is your middle name. You lean more towards chic styles with clean cuts.',
			girlNextDoor: 'Your innate sense of femininity is both endearing and impressive. You like anything that is fuss-free and comfortable.',
			tomboy: 'True to your tomboyish personality, you like to keep things casual. You always pick comfort over style, but hey! Isn’t sports luxe a raging trend?',
			relaxed: 'You put comfort above all else. But that doesn’t mean the latest trends are ignored. Your style can be summed up as casual-chic.',
			artsy: 'You seek inspiration in everything around you. No wonder your sense of style reflects your inclination towards all things artistic.',
			elegant: 'People look up to you for your impeccable sense of style. You have great taste and a knack for picking out classy stuff.'

		}

		return(
			<div style={this.getContainerStyles()}>

				<div>

					<div>
						<div style={linedTitle}>Shirt dress</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463653686/SIS/footwear-dictionary/Heels/shirt/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="shirt">
							<ImageChild
								image="http://assets.myntassets.com/v1463653687/SIS/footwear-dictionary/Heels/shirt/Pumps.jpg"
								width="33.33%"
								title="leather pumps"
							>
								<div>
									<div style={showMoreTitle}>trendsetter</div>
									<div style={showMoreText}>{showMoreTextObj.trendsetter}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Shoe_Type_article_attr%3Apumps%3A%3AUpper_Material_article_attr%3Aleather&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463653687/SIS/footwear-dictionary/Heels/shirt/WovenWedges.jpg"
								width="33.33%"
								title="woven wedges"
							>
								<div>
									<div style={showMoreTitle}>Classic</div>
									<div style={showMoreText}>{showMoreTextObj.classic}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Awedge%3A%3AOccasion_article_attr%3Adaily%2520%252F%2520casual%3A%3APattern_article_attr%3Awoven&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1464243411/SIS/footwear-dictionary/Heels/shirt/flatforms-for-shirt-dress.jpg"
								width="33.33%"
								title="Flatforms"
							>
								<div>
									<div style={showMoreTitle}>relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Aflatform&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Jeans & T-shirt</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463655234/SIS/footwear-dictionary/Heels/Jeans/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="Jeans">
							<ImageChild
								image="http://assets.myntassets.com/v1463655234/SIS/footwear-dictionary/Heels/Jeans/Leather.jpg"
								width="33.33%"
								title="leather pumps"
							>
								<div>
									<div style={showMoreTitle}>Contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Shoe_Type_article_attr%3Apumps%3A%3AUpper_Material_article_attr%3Aleather&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463655234/SIS/footwear-dictionary/Heels/Jeans/Anklestrap.jpg"
								width="33.33%"
								title="ankle-strap heels"
							>
								<div>
									<div style={showMoreTitle}>classic</div>
									<div style={showMoreText}>{showMoreTextObj.classic}</div>
									<a href="http://www.myntra.com/ankle-strap-heels?sort=popularity&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463996487/SIS/footwear-dictionary/Heels/Jeans/Slingback.jpg"
								width="33.33%"
								title="slingback platforms"
							>
								<div>
									<div style={showMoreTitle}>girl-Next-Door</div>
									<div style={showMoreText}>{showMoreTextObj.girlNextDoor}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Fastening_and_Back_Detail_article_attr%3Asling%2520back%3A%3AHeel_Type_article_attr%3Aplatform&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Maxi dress</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463655889/SIS/footwear-dictionary/Heels/Maxi%20dress/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="Maxi">
							<ImageChild
								image="http://assets.myntassets.com/v1463655890/SIS/footwear-dictionary/Heels/Maxi%20dress/WovenWedges.jpg"
								width="33.33%"
								title="woven wedges"
							>
								<div>
									<div style={showMoreTitle}>girl-Next-Door</div>
									<div style={showMoreText}>{showMoreTextObj.girlNextDoor}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Height_article_attr%3A2%2520inches%2C2.5%2520inches%2C3%2520inches%2C3.5%2520inches%2C4%2520inches%2C5%2520inches%3A%3AHeel_Type_article_attr%3Awedge%3A%3AOccasion_article_attr%3Adaily%2520%252F%2520casual%3A%3APattern_article_attr%3Awoven&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463655889/SIS/footwear-dictionary/Heels/Maxi%20dress/Metallic.jpg"
								width="33.33%"
								title="metallic peep-toes"
							>
								<div>
									<div style={showMoreTitle}>elegant</div>
									<div style={showMoreText}>{showMoreTextObj.elegant}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Shoe_Type_article_attr%3Apeep%2520toes%3A%3Acolour%3Abronze%2Cgold%2Cgunmetal%2Cmetallic%2Csilver&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463655889/SIS/footwear-dictionary/Heels/Maxi%20dress/PartyWear.jpg"
								width="33.33%"
								title="party wear ankle-straps"
							>
								<div>
									<div style={showMoreTitle}>contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/ankle-strap-heels?f=Occasion_article_attr%3Apartywear&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Kurta & leggings</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463656555/SIS/footwear-dictionary/Heels/Kurta/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="Kurta">
							<ImageChild
								image="http://assets.myntassets.com/v1463656554/SIS/footwear-dictionary/Heels/Kurta/ClassicPumpd.jpg"
								width="33.33%"
								title="classic pumps"
							>
								<div>
									<div style={showMoreTitle}>trendsetter</div>
									<div style={showMoreText}>{showMoreTextObj.trendsetter}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Occasion_article_attr%3Adaily%2520%252F%2520casual%2Cwork%2520wear%3A%3AShoe_Type_article_attr%3Apumps&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463656554/SIS/footwear-dictionary/Heels/Kurta/ElegantAnklestrap.jpg"
								width="33.33%"
								title="elegant ankle-straps"
							>
								<div>
									<div style={showMoreTitle}>classic</div>
									<div style={showMoreText}>{showMoreTextObj.classic}</div>
									<a href="http://www.myntra.com/ankle-strap-heels?f=Occasion_article_attr%3Adaily%2520%252F%2520casual&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463665195/SIS/footwear-dictionary/Heels/Kurta/WovenWedges.jpg"
								width="33.33%"
								title="woven wedges"
							>
								<div>
									<div style={showMoreTitle}>relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Awedge%3A%3APattern_article_attr%3Awoven&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Formal trousers & shirt</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463657826/SIS/footwear-dictionary/Heels/formal/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="Formal">
							<ImageChild
								image="http://assets.myntassets.com/v1463657826/SIS/footwear-dictionary/Heels/formal/kittenheels.jpg"
								width="33.33%"
								title="kitten heels"
							>
								<div>
									<div style={showMoreTitle}>girl-Next-Door</div>
									<div style={showMoreText}>{showMoreTextObj.girlNextDoor}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Akitten%3A%3AShoe_Type_article_attr%3Apeep%2520toes%2Cpumps%3A%3Acolour%3Abeige%2Cblack%2Cbrown%2Cnavy%2Csilver%2Ctan&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463657827/SIS/footwear-dictionary/Heels/formal/WorkWearPumps.jpg"
								width="33.33%"
								title="work wear pumps"
							>
								<div>
									<div style={showMoreTitle}>classic</div>
									<div style={showMoreText}>{showMoreTextObj.classic}</div>
									<a href="http://www.myntra.com/women-heels-guide?f=Shoe_Type_article_attr%3Apumps%3A%3Acolour%3Abeige%2Cblack%2Cbrown%2Cnavy%2Csilver%2Ctan&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463657827/SIS/footwear-dictionary/Heels/formal/SolidAnkleStraps.jpg"
								width="33.33%"
								title="solid ankle-straps"
							>
								<div>
									<div style={showMoreTitle}>elegant</div>
									<div style={showMoreText}>{showMoreTextObj.elegant}</div>
									<a href="http://www.myntra.com/ankle-strap-heels?f=Pattern_article_attr%3Asolid&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Shorts & tank top</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463657321/SIS/footwear-dictionary/Heels/shorts/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="Shorts">
							<ImageChild
								image="http://assets.myntassets.com/v1463657321/SIS/footwear-dictionary/Heels/shorts/Flatforms.jpg"
								width="33.33%"
								title="casual flatforms"
							>
								<div>
									<div style={showMoreTitle}>contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>

									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Aflatform%3A%3AOccasion_article_attr%3Adaily%2520%252F%2520casual&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>

								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463657321/SIS/footwear-dictionary/Heels/shorts/OpenToe.jpg"
								width="33.33%"
								title="open-toe sandals"
							>
								<div>
									<div style={showMoreTitle}>trendsetter</div>
									<div style={showMoreText}>{showMoreTextObj.trendsetter}</div>

									<a href="http://www.myntra.com/women-heels-guide?f=Occasion_article_attr%3Apartywear%3A%3AShoe_Type_article_attr%3Asandals%3A%3AToe_Shape_article_attr%3Aopen%2520toe&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>

								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463657321/SIS/footwear-dictionary/Heels/shorts/Boots.jpg"
								width="33.33%"
								title="stiletto boots"
							>
								<div>
									<div style={showMoreTitle}>tomboy</div>
									<div style={showMoreText}>{showMoreTextObj.tomboy}</div>

									<a href="http://www.myntra.com/women-heels-guide?f=Heel_Type_article_attr%3Astiletto&1`1`11SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>

								</div>
								
							</ImageChild>
						</ShowMore>
					</div>




				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}