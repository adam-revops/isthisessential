import React from 'react';

import {
	ReactiveBase,
	DataSearch,
	ReactiveList,
	ResultCard,
	SelectedFilters,
} from '@appbaseio/reactivesearch';

import './search.css';

const Search = () => (
	<ReactiveBase app="isthisessential" credentials="7VFVyWaSL:70c8133e-9223-4739-b67c-316babfea8a0">
		<div className="row">
			<div className="col">
				<DataSearch
					title="Search by store or category"
					dataField={['Name', 'Name.search']}
					categoryField="Category.raw"
					componentId="Store"
					URLParams
				/>
			</div>

			<div className="col">
				<SelectedFilters />
				<ReactiveList
					componentId="SearchResult"
					dataField="original_title"
					size={10}
					className="result-list-container"
					pagination
					react={{
						and: 'Address',
					}}
					render={({ data }) => (
						<ReactiveList.ResultCardsWrapper>
							{data.map(item => (
								<ResultCard key={item.id}>
									<ResultCard.Title>
										<div
											className="book-title"
											dangerouslySetInnerHTML={{
												__html: item.Name,
											}}
										/>
									</ResultCard.Title>

									<ResultCard.Description>
										<div className="flex column justify-space-between">
											<div>
                        <div className={item.Essential? 'essential' : 'not-essential'}>
                          {item.Essential === true? 'It is essential!' : 'Not essential'}
                        </div>
												<div className="description">
                          {item.Description} 
												</div>
												<div className="store-list flex align-center">
													<span className="address">
														{item.Address}
													</span>
                          <span className="pickup">
                            {item.Pickup === true && 'Pickup'}
                            </span>
                          <span className="delivery">
                            {item.Delivery === true && 'Delivery'}
                          </span>
												</div>
											</div>
										</div>
									</ResultCard.Description>
								</ResultCard>
							))}
						</ReactiveList.ResultCardsWrapper>
					)}
				/>
			</div>
		</div>
	</ReactiveBase>
);

export default Search